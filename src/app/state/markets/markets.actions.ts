import { Action } from '@ngrx/store';
import { GetMarketsResDtoInterface } from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export const MARKETS_GET_ALL = '[Markets] Get All';
export const MARKETS_GET_ALL_SUCCESS = '[Markets] Get All Success';
export const MARKETS_GET_ALL_FAIL = '[Markets] Get All Fail';

export class GetMarkets implements Action {
  readonly type = MARKETS_GET_ALL;

  constructor(readonly payload?: null) {}
}

export class GetMarketsSuccess implements Action {
  readonly type = MARKETS_GET_ALL_SUCCESS;

  constructor(readonly payload: GetMarketsResDtoInterface) {}
}

export class GetMarketsFail implements Action {
  readonly type = MARKETS_GET_ALL_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export type All =
  | GetMarkets
  | GetMarketsSuccess
  | GetMarketsFail;
