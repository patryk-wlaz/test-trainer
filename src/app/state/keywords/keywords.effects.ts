import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, withLatestFrom, map, pluck, mergeMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as KeywordsActions from './keywords.actions';
import * as CampaignsActions from '../campaign';
import { HttpService } from 'app/core/http/http.service';
import { AppState } from '..';
import {
  CreateKeywordsResDtoInterface,
  UpdateKeywordResDtoInterface,
  DeleteKeywordResDtoInterface,
  GetKeywordsResDtoInterface,
  KeywordTypeToIndex,
} from '@common';
import * as _ from 'lodash';

@Injectable()
export class KeywordsEffects {
  constructor(
    private store$: Store<AppState>,
    private actions$: Actions<KeywordsActions.All>,
    private http: HttpService
  ) {}

  @Effect() addKeywords: Observable<Action> = this.actions$.pipe(
    ofType(KeywordsActions.ADD_KEYWORDS),
    withLatestFrom(this.store$),
    switchMap(([action, store]) =>
      this.http.addKeywords(action.payload, store.campaign.campaign.id).pipe(
        mergeMap((response: CreateKeywordsResDtoInterface) => [
          new KeywordsActions.AddKeywordsSuccess(response),
          new CampaignsActions.GetCampaignSuccess(response.campaign),
          new KeywordsActions.SetCurrentTab({ currentTab: KeywordTypeToIndex[action.payload.type] }),
        ]),
        catchError(err => of(new KeywordsActions.AddKeywordsFail(err)))
      ))
  );

  @Effect() loadApiKeywords: Observable<Action> = this.actions$.pipe(
    ofType(KeywordsActions.LOAD_API_KEYWORDS),
    withLatestFrom(this.store$),
    switchMap(([action, store]) =>
      this.http.loadApiKeywords(action.payload, store.campaign.campaign.id).pipe(
        mergeMap((response: CreateKeywordsResDtoInterface) => [
          new KeywordsActions.LoadApiKeywordsSuccess(response),
          new CampaignsActions.GetCampaignSuccess(response.campaign),
          new KeywordsActions.SetCurrentTab({ currentTab: KeywordTypeToIndex[action.payload.type] }),
        ]),
        catchError(err => of(new KeywordsActions.AddKeywordsFail(err)))
      ))
  );

  @Effect() getKeywords: Observable<Action> = this.actions$.pipe(
    ofType(KeywordsActions.GET_KEYWORDS),
    map(action => action.payload),
    withLatestFrom(this.store$),
    switchMap(([payload, store]) =>
      (payload.calculateBudget
        ? this.http.getKeywordsWithStrategyData(store.campaign.campaign.id)
        : this.http.getKeywords(store.campaign.campaign.id)).pipe(
        map((response: GetKeywordsResDtoInterface) =>
          new KeywordsActions.GetKeywordsSuccess(response)
        ),
        catchError(err => of(new KeywordsActions.AddKeywordsFail(err)))
      ))
  );

  @Effect() updateKeyword: Observable<Action> = this.actions$.pipe(
    ofType(KeywordsActions.UPDATE_KEYWORD),
    pluck('payload'),
    switchMap(({ keywordId, keywordData}) => this.http.updateKeyword(keywordId, keywordData)
      .pipe(
        mergeMap((response: UpdateKeywordResDtoInterface) => [
          new KeywordsActions.UpdateKeywordSuccess(_.omit(response, 'campaign')),
          new CampaignsActions.GetCampaignSuccess(response.campaign),
        ]),
        catchError(err => of(new KeywordsActions.UpdateKeywordFail(err)))
      ))
  );

  @Effect() updateKeywords: Observable<Action> = this.actions$.pipe(
    ofType(KeywordsActions.UPDATE_KEYWORDS),
    pluck('payload'),
    switchMap(({ keywordData }) => this.http.updateKeywords(keywordData)
      .pipe(
        switchMap((response) => [
          new KeywordsActions.UpdateKeywordsSuccess(response.keywords),
          response.campaign ? new CampaignsActions.GetCampaignSuccess(response.campaign) : { type: 'noop' },
        ]),
        catchError(err => of(new KeywordsActions.UpdateKeywordsFail(err)))
      ))
  );

  @Effect() deleteKeyword: Observable<Action> = this.actions$.pipe(
    ofType(KeywordsActions.DELETE_KEYWORD),
    switchMap((action) =>
      this.http.deleteKeyword(action.payload).pipe(
        mergeMap((response: DeleteKeywordResDtoInterface) => [
          new KeywordsActions.DeleteKeywordSuccess(action.payload),
          new CampaignsActions.GetCampaignSuccess(response.campaign),
        ]),
        catchError(err => of(new KeywordsActions.DeleteKeywordFail(err)))
      ))
  );
}
