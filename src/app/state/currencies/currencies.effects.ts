import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as CurrenciesActions from './currencies.actions';
import { HttpService } from 'app/core/http/http.service';
import { GetCurrenciesResDtoInterface } from '@common';

@Injectable()
export class CurrenciesEffects {
  constructor(
    private actions$: Actions<CurrenciesActions.All>,
    private http: HttpService
  ) {}

  @Effect() getCurrencies: Observable<Action> = this.actions$.pipe(
    ofType(CurrenciesActions.CURRENCIES_GET_ALL),
    switchMap(() =>
      this.http.getCurrencies().pipe(
        map(
          (response: GetCurrenciesResDtoInterface) =>
            new CurrenciesActions.GetCurrenciesSuccess(response)
        ),
        catchError(err => of(new CurrenciesActions.GetCurrenciesFail(err)))
      ))
  );
}
