import { Action } from '@ngrx/store';
import { GetCurrenciesResDtoInterface } from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export const CURRENCIES_GET_ALL = '[Currencies] Get All';
export const CURRENCIES_GET_ALL_SUCCESS = '[Currencies] Get All Success';
export const CURRENCIES_GET_ALL_FAIL = '[Currencies] Get All Fail';

export class GetCurrencies implements Action {
  readonly type = CURRENCIES_GET_ALL;

  constructor(readonly payload?: null) {}
}

export class GetCurrenciesSuccess implements Action {
  readonly type = CURRENCIES_GET_ALL_SUCCESS;

  constructor(readonly payload: GetCurrenciesResDtoInterface) {}
}

export class GetCurrenciesFail implements Action {
  readonly type = CURRENCIES_GET_ALL_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export type All =
  | GetCurrencies
  | GetCurrenciesSuccess
  | GetCurrenciesFail;
