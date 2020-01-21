import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { EditStrategyDialogComponent } from 'app/edit-strategy-dialog/edit-strategy-dialog.component';
import { MatDialog } from '@angular/material';
import { GetCampaignStrategies, StrategyValuesByType } from '../state/strategies';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state';
import { Campaign, GetStrategyResDtoInterface } from '@common';
import { getCampaignStrategyValuesByType, UpdateCampaign } from '../state/campaign';
import * as _ from 'lodash';
import { GetKeywords } from '@state/keywords';
import { Go } from '@state/router';

@AutoUnsubscribe()
@Component({
  selector: 'app-campaign-strategy',
  templateUrl: './campaign-strategy.component.html',
  styleUrls: ['./campaign-strategy.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CampaignStrategyComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  campaignId: Campaign['id'];
  strategies$: Observable<AppState['strategies']['list']>;
  selectedStrategyIdSub: Subscription;
  strategies: AppState['strategies']['list'];
  selectedStrategyId$: Observable<AppState['campaign']['campaign']['strategyId']>;
  currentCampaign$: Observable<AppState['campaign']['campaign']>;
  startCase = _.startCase;
  selectedStrategyValuesByType$: Observable<StrategyValuesByType>;
  loadingStrategies$: Observable<boolean>;
  strategiesError$: Observable<string>;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private store$: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.parent.paramMap.subscribe((paramMap) => {
      this.campaignId = paramMap.get('campaignId');
      this.store$.dispatch(new GetCampaignStrategies(this.campaignId));
    });
    this.loadingStrategies$ = this.store$.select(state => state.strategies.isLoading);
    this.strategiesError$ = this.store$.select(state => state.strategies.errorMessage);
    this.selectedStrategyId$ = this.store$.select(state => state.campaign.campaign.strategyId);
    this.strategies$ = this.store$.select(state => state.strategies.list);
    this.selectedStrategyValuesByType$ = this.store$.select(getCampaignStrategyValuesByType);
    this.currentCampaign$ = this.store$.pipe(select(store => store.campaign.campaign));
    this.selectedStrategyIdSub = this.selectedStrategyId$.subscribe(() => {
      this.store$.dispatch(new GetKeywords({ calculateBudget: true }));
    });
  }

  ngOnDestroy(): void {}

  openStrategyPlanEditDialog(edit: boolean, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const dialogRef = this.dialog.open(EditStrategyDialogComponent, {
      width: '810px',
      minWidth: '810px',
      data: {
        edit,
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        return;
      }
      return this.selectStrategy(data.strategyId);
    });
  }

  selectStrategy(strategyId: string): void {
    return this.store$.dispatch(new UpdateCampaign({ campaignData: { strategyId }, campaignId: this.campaignId }));
  }

  validateStrategyValues(values: GetStrategyResDtoInterface['values']): boolean {
    if (values === null) { return false; }

    return _.every(values, value => _.every(value, item => _.isNumber(item)));
  }

  redirect(where: string): void {
    const partUrl = where === 'campaigns'
      ? ''
      : `/${this.campaignId}/${where}`;
    this.store$.dispatch(new Go({ path: [`campaigns${partUrl}`] }));
  }
}
