import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as StrategiesActions from './strategies.actions';
import { HttpService } from 'app/core/http/http.service';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import * as CampaignsActions from '@state/campaign';

@Injectable()
export class StrategiesEffects {
  constructor(
    private actions$: Actions<StrategiesActions.All>,
    private http: HttpService
  ) {}

  @Effect() getCampaignStrategies: Observable<Action> = this.actions$.pipe(
    ofType(StrategiesActions.STRATEGIES_GET_FOR_CAMPAIGN),
    switchMap((action) => this.http.getCampaignStrategies(action.payload)
      .pipe(
        map(response => new StrategiesActions.GetCampaignStrategiesSuccess(response)),
        catchError(error => of(new StrategiesActions.GetCampaignStrategiesFail(error)))
      ))
  );

  @Effect() UpdateStrategies: Observable<Action> = this.actions$.pipe(
    ofType(StrategiesActions.STRATEGIES_UPDATE_STRATEGY),
    map(action => action.payload),
    switchMap((paylaod) => this.http.updateStrategy(paylaod.id, paylaod.values)
      .pipe(
        mergeMap((response) => [
          new StrategiesActions.UpdateStrategySuccess(response.strategy),
          new CampaignsActions.GetCampaignSuccess(response.campaign || {}),
        ]),
        catchError(error => of(new StrategiesActions.UpdateStrategyFail(error.message)))
      ))
  );
}
