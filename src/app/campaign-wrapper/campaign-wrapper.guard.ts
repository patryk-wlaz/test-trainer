import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { AppState } from 'app/state';
import { Action, Store } from '@ngrx/store';
import * as _ from 'lodash';
import * as campaignActions from '@state/campaign/campaign.actions';
import * as marketsActions from '@state/markets/markets.actions';
import * as currenciesActions from '@state/currencies/currencies.actions';
import * as clientsActions from '@state/clients/clients.actions';
import { catchError, switchMap, take } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { Go } from '@state/router';
import { StepsEnum } from '@common';
import { get } from 'lodash';

@Injectable()
export class CampaignWrapperGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions<campaignActions.All | marketsActions.All | currenciesActions.All | clientsActions.All>
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const campaignId = route.paramMap.get('campaignId');

    return combineLatest(
      this.getCampaign(campaignId),
      this.getClients(),
      this.getMarkets(),
      this.getCurrencies()
    ).pipe(
        switchMap((result) => {
          const anyNotOk = result.find(action => _.includes([
            campaignActions.GET_CAMPAIGN_FAIL,
            clientsActions.CLIENTS_GET_ALL_FAIL,
            marketsActions.MARKETS_GET_ALL_FAIL,
            currenciesActions.CURRENCIES_GET_ALL_FAIL,
          ], action.type));

          if (anyNotOk) {
            return of(false);
          }

          const campaignAction: campaignActions.GetCampaignSuccess = _.find(result, {
            type: campaignActions.GET_CAMPAIGN_SUCCESS,
          }) as campaignActions.GetCampaignSuccess;

          if (campaignAction.payload
            && get(route, '_routerState.url') === `/campaigns/${campaignAction.payload.id}`) {

            this.store.dispatch(new Go({
              path: [`campaigns/${campaignAction.payload.id}/${StepsEnum[campaignAction.payload.step].toLowerCase()}`],
            }));
          }

          return of(true);
        }),
        catchError(() => of(false))
      );
  }

  getCampaign(id: string): Observable<Action> {
    if (id === '0') {
      const campaignSuccessAction = new campaignActions.GetCampaignSuccess({
        id: '0',
        clientId: '',
        startDate: new Date(),
        endDate: new Date(),
        name: '',
        marketId: '',
        currencyId: '',
        description: '',
        step: 0,
        adsShare: [70, 20, 10],
        active: true,
        impressionShareStrategy: JSON.stringify([
          [2, 1, 0],
          [13, 12, 11],
          [23, 22, 21],
          [33, 32, 31],
          [43, 42, 41],
          [53, 52, 51],
          [63, 62, 61],
          [73, 72, 71],
          [83, 82, 81],
          [93, 92, 91],
        ]),
      });

      this.store.dispatch(campaignSuccessAction);
      return of(campaignSuccessAction);
    }

    this.store.dispatch(new campaignActions.GetCampaign(id));
    return this.actions$
      .pipe(
        ofType(campaignActions.GET_CAMPAIGN_SUCCESS, campaignActions.GET_CAMPAIGN_FAIL),
        take(1)
      );
  }

  getClients(): Observable<Action> {
    this.store.dispatch(new clientsActions.GetClients());
    return this.actions$
      .pipe(
        ofType(
          clientsActions.CLIENTS_GET_ALL_SUCCESS,
          clientsActions.CLIENTS_GET_ALL_FAIL
        ),
        take(1)
      );
  }

  getMarkets(): Observable<Action> {
    this.store.dispatch(new marketsActions.GetMarkets());
    return this.actions$
      .pipe(
        ofType(
          marketsActions.MARKETS_GET_ALL_SUCCESS,
          marketsActions.MARKETS_GET_ALL_FAIL
        ),
        take(1)
      );
  }

  getCurrencies(): Observable<Action> {
    this.store.dispatch(new currenciesActions.GetCurrencies());
    return this.actions$
      .pipe(
        ofType(
          currenciesActions.CURRENCIES_GET_ALL_SUCCESS,
          currenciesActions.CURRENCIES_GET_ALL_FAIL
        ),
        take(1)
      );
  }
}
