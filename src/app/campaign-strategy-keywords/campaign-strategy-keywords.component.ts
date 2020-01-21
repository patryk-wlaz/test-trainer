import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { KeywordTypes, GetKeywordsResDtoInterface } from '@common';
import { AppState } from 'app/state';
import * as _ from 'lodash';
import { getKeywordsByType } from '@state/keywords';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-campaign-strategy-keywords',
  templateUrl: './campaign-strategy-keywords.component.html',
  styleUrls: ['./campaign-strategy-keywords.component.scss'],
})
export class CampaignStrategyKeywordsComponent implements OnInit {
  keywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  currentCampaignCurrencyAcronym$: Observable<string>;
  loadingKeywords$: Observable<boolean>;
  keywordsError$: Observable<string>;
  brandKeywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  genericKeywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  competitorKeywords$: Observable<GetKeywordsResDtoInterface['rows']>;
  keywordTypes = KeywordTypes;

  public constructor (private store$: Store<AppState>) { }

  public ngOnInit(): void {
    this.keywords$ = this.store$.pipe(select((store: AppState) => store.keywords.list));
    this.brandKeywords$ = this.store$.pipe(select(getKeywordsByType(KeywordTypes.BRAND)));
    this.genericKeywords$ = this.store$.pipe(select(getKeywordsByType(KeywordTypes.GENERIC)));
    this.competitorKeywords$ = this.store$.pipe(select(getKeywordsByType(KeywordTypes.COMPETITOR)));

    this.loadingKeywords$ = this.store$.pipe(select((store: AppState) => store.keywords.isLoading));
    this.keywordsError$ = this.store$.pipe(select((store: AppState) => store.keywords.errorMessage));
    this.currentCampaignCurrencyAcronym$ = this.store$.pipe(select((store: AppState) =>
      _.get(store, 'campaign.campaign.currency.acronym', '')));
  }

  getKeywordsOfTypeLength(type: KeywordTypes): Observable<number> {
    return this.store$.pipe(
      select(getKeywordsByType(type)),
      map(keywords => keywords.length)
    );
  }

}
