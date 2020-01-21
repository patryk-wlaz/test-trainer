import * as _ from 'lodash';

import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { GetKeywordResDtoInterface, GetKeywordsResDtoInterface } from '@common';
import { MatSort } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from 'app/state';
import * as KeywordsActions from '@state/keywords';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Observable } from 'rxjs';

@AutoUnsubscribe()
@Component({
  selector: 'app-campaign-strategy-keywords-list',
  templateUrl: './campaign-strategy-keywords-list.component.html',
  styleUrls: ['./campaign-strategy-keywords-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CampaignStrategyKeywordsListComponent implements OnInit, OnDestroy {
  @Input('keywords') keywords: GetKeywordsResDtoInterface['rows'];
  @Input('currency') currency: string;

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = [
    'name',
    'searchVolume',
    'arh',
    'targetImpsShare',
    'impressions',
    'clicks',
    'budget',
  ];
  selectedStrategyId$: Observable<string>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.selectedStrategyId$ = this.store$.select(state => state.campaign.campaign.strategyId);
  }

  ngOnDestroy(): void { }

  areAllKeywordsSelected(): boolean {
    return this.keywords.every(keyword => keyword.active);
  }

  isSomeKeywordSelected(): boolean {
    return this.keywords.some(keyword => keyword.active);
  }

  masterToggle(): void {
    return this.areAllKeywordsSelected() ? this.setAllKeywordsStatus(false) : this.setAllKeywordsStatus(true);
  }

  toggleKeyword(keyword: GetKeywordResDtoInterface): void {
    this.store$.dispatch(new KeywordsActions.UpdateKeyword({
      keywordData: {
        active: !keyword.active,
      },
      keywordId: keyword.id,
    }));
  }

  private setAllKeywordsStatus(active: boolean): void {
    const keywordsToUpdate = _.reject(this.keywords, { active });
    this.store$.dispatch(new KeywordsActions.UpdateKeywords({
      keywordData: _.map(keywordsToUpdate, ({ id }) => ({
        id,
        active,
      })),
    }));
  }

  public trackByFn(index: any, item: any) {
    return item.id;
  }
}
