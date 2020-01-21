import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import * as _ from 'lodash';

import {
  Campaign,
  Currency,
  GetCampaignResDtoInterface,
  GetKeywordsResDtoInterface,
  KeywordTypes,
  KeywordTypesNames,
} from '@common';

import { AppState } from 'app/state';
import {
  getActiveKeywords, getActiveKeywordsSummary, getActiveKeywordsSummaryByType,
  GetKeywords, getKeywordsByType,
} from 'app/state/keywords';
import { Observable, Subscription } from 'rxjs';
import { Go } from 'app/state/router';
import { tap, map } from 'rxjs/operators';
import { getCampaignStrategyValuesByType } from '@state/campaign';
import { StrategyValuesByType } from '@state/strategies';

interface KeywordSummary {
  arh: number;
  brand: number;
  product: number;
  productDisplay: number;
  budget: number;
}

type KeywordSummaryByType = Array<Partial<KeywordSummary & { type: string }>>;

@AutoUnsubscribe()
@Component({
  selector: 'app-campaign-summary',
  templateUrl: './campaign-summary.component.html',
  styleUrls: ['./campaign-summary.component.scss'],
})
export class CampaignSummaryComponent implements OnInit, OnDestroy {
  keywordTypesNames = KeywordTypesNames;
  keywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  brandKeywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  genericKeywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  competitorKeywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  currentCampaign$: Observable<GetCampaignResDtoInterface>;
  campaignId: Campaign['id'];
  currentCampaignSub: Subscription;
  displayedColumns = [
    'type',
    'arh',
    'brand',
    'product',
    'productDisplay',
    'budget',
  ];
  currentCampaignCurrency$: Observable<Currency>;
  campaignSummary$: Observable<KeywordSummary>;
  startCase = _.startCase;
  capitalize = _.capitalize;

  campaignSummaryByType$: Observable<KeywordSummaryByType>;
  selectedStrategyValuesByType$: Observable<StrategyValuesByType>;
  loadingKeywords$: Observable<boolean>;
  keywordTypes = KeywordTypes;

  constructor (
    private store$: Store<AppState>) { }

  ngOnInit(): void {
    this.store$.dispatch(new GetKeywords({ calculateBudget: true }));

    this.keywords$ = this.store$.pipe(select(getActiveKeywords));
    this.brandKeywords$ = this.store$.pipe(select(getKeywordsByType(KeywordTypes.BRAND)));
    this.genericKeywords$ = this.store$.pipe(select(getKeywordsByType(KeywordTypes.GENERIC)));
    this.competitorKeywords$ = this.store$.pipe(select(getKeywordsByType(KeywordTypes.COMPETITOR)));

    this.loadingKeywords$ = this.store$.pipe(select((state) => state.keywords.isLoading));
    this.campaignSummaryByType$ = this.store$.select(getActiveKeywordsSummaryByType);
    this.campaignSummary$ = this.store$.select(getActiveKeywordsSummary);
    this.selectedStrategyValuesByType$ = this.store$.select(getCampaignStrategyValuesByType);

    this.currentCampaign$ = this.store$.pipe(
      select(store => store.campaign.campaign)
    );
    this.currentCampaignCurrency$ = this.store$.pipe(
      select(store => store.campaign.campaign.currency)
    );
    this.currentCampaignSub = this.currentCampaign$
      .pipe(
        tap((campaign) => this.campaignId = campaign.id)
      )
      .subscribe();
  }

  ngOnDestroy(): void { }

  redirect(where: string): void {
    const partUrl = where === 'campaigns'
      ? ''
      : `/${this.campaignId}/${where}`;
    this.store$.dispatch(new Go({ path: [`campaigns${partUrl}`] }));
  }

  getKeywordsOfTypeLength(type: KeywordTypes): Observable<number> {
    return this.store$.pipe(
      select(getKeywordsByType(type)),
      map(keywords => keywords.length)
    );
  }
}
