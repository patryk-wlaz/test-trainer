import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppState } from '../state';
import * as _ from 'lodash';
import {
  getStrategiesValuesByType,
  StateStrategyItem,
  StrategiesState,
  StrategyValuesByType,
  UpdateStrategy,
} from '@state/strategies';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { KeywordTypes, Strategy, KeywordTypeToIndex } from '@common/index';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-strategy-dialog',
  styleUrls: ['./edit-strategy-dialog.component.scss'],
  templateUrl: './edit-strategy-dialog.component.html',
})
export class EditStrategyDialogComponent implements OnInit {
  startCase = _.startCase;
  displayedColumns = [
    'keywordType',
    ..._.times(10, (i) => (i + 1).toString()),
  ];
  strategies: StrategiesState['list'];
  minImpShare = 0;
  maxImpShare = 100;
  userStrategyValues: number[][];
  userStrategy: StateStrategyItem;
  chartOptions: Chart.ChartConfiguration['options'] = {
    layout: {
      padding: {
        left: 78,
        right: 46,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Target Imps Share',
            fontSize: 11,
          },
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            min: 0,
            max: 100,
            callback: (value: number) => `${value}%`,
            fontColor: '#9E9E9E',
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            min: 0,
            max: 10,
            fontColor: '#9E9E9E',
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  keywordTypes = KeywordTypes;
  strategies$: Observable<Array<StateStrategyItem & StrategyValuesByType>>;
  currentStrategyIndex = 0;
  private strategiesLength: number;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.code;
    if (key === 'ArrowRight') {
      this.nextStrategy();
    }
    if (key === 'ArrowLeft') {
      this.previousStrategy();
    }
  }

  constructor(
    public dialogRef: MatDialogRef<EditStrategyDialogComponent>,
    private store$: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: {
      edit: boolean;
    }
  ) {
  }

  ngOnInit(): void {
    this.strategies$ = this.store$.pipe(
      select(getStrategiesValuesByType),
      // Temporarily disable user defined strategy preview
      tap((strategies) => {
        this.strategiesLength = strategies.length;
        this.userStrategy = strategies.find(strategy => !!strategy.campaignId);
      }));

    combineLatest(
      this.store$.pipe(select((state) => state.campaign.campaign.strategyId)),
      this.strategies$
      ).pipe(take(1))
      .subscribe(([strategyId, strategies]) => {
        this.userStrategyValues = this.userStrategyValues || (this.userStrategy.values
          ? _.cloneDeep(this.userStrategy.values)
          : _.times(10, () => _.times(3, () => null)));
        this.currentStrategyIndex = _.findIndex(strategies, (strategy) => strategy.id === ((this.data.edit || !strategyId)
          ? this.userStrategy.id
          : strategyId));
    });
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }

  previousStrategy() {
    this.currentStrategyIndex = this.currentStrategyIndex === 0 ? (this.strategiesLength - 1) : --this.currentStrategyIndex;
  }

  nextStrategy() {
    this.currentStrategyIndex = this.currentStrategyIndex === (this.strategiesLength - 1) ? 0 : ++this.currentStrategyIndex;
  }

  chooseStrategy(strategyId: Strategy['id']) {
    this.dialogRef.close({ strategyId });
  }

  isStrategyValid(strategy: Strategy) {
    return !strategy.campaignId
      ? true
      : strategy.values && _.every(strategy.values, value => value && _.every(value, item => _.isNumber(item)));
  }

  setValue(inputRef: HTMLInputElement, index: number, keywordType: KeywordTypes): void {
    let value: number = Number(inputRef.value.replace(/,/g, '.'));

    if (value < this.minImpShare || _.isNaN(value)) {
      value = this.minImpShare;
    }

    if (value > this.maxImpShare) {
      value = this.maxImpShare;
    }

    this.userStrategyValues[index][KeywordTypeToIndex[keywordType]] = +(value / 100).toFixed(2);

    this.store$.dispatch(new UpdateStrategy({ id: this.userStrategy.id, values: _.cloneDeep(this.userStrategyValues) }));
  }

  trackByFn(index: number): number {
    return index;
  }
}
