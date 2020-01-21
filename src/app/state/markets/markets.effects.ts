import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as _ from 'lodash';

import * as MarketsActions from './markets.actions';
import { HttpService } from 'app/core/http/http.service';
import { GetMarketsResDtoInterface } from '@common';

@Injectable()
export class MarketsEffects {
  constructor(
    private actions$: Actions<MarketsActions.All>,
    private http: HttpService
  ) {}

  @Effect() getMarkets: Observable<Action> = this.actions$.pipe(
    ofType(MarketsActions.MARKETS_GET_ALL),
    switchMap((action: MarketsActions.GetMarkets) => {
      const search = _.get(action, 'payload.search', '');
      return this.http.getMarkets(search).pipe(
        map(
          (response: GetMarketsResDtoInterface) =>
            new MarketsActions.GetMarketsSuccess(response)
        ),
        catchError(err => of(new MarketsActions.GetMarketsFail(err)))
      );
    })
  );
}
