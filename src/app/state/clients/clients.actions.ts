import { Action } from '@ngrx/store';
import { ClientsState, Client, Brand } from './clients.model';
import { HttpErrorResponse } from '@angular/common/http';

export const GET_CLIENTS = 'GET_CLIENTS';
export const GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS';
export const GET_CLIENTS_FAIL = 'GET_CLIENTS_FAIL';

export const GET_CLIENT = 'GET_CLIENT';
export const GET_CLIENT_SUCCESS = 'GET_CLIENT_SUCCESS';
export const GET_CLIENT_FAIL = 'GET_CLIENT_FAIL';

export const SEND_MARKET_REQUEST = 'SEND_MARKET_REQUEST';
export const SEND_MARKET_REQUEST_SUCCESS = 'SEND_MARKET_REQUEST_SUCCESS';
export const SEND_MARKET_REQUEST_FAIL = 'SEND_MARKET_REQUEST_FAIL';

export const RESET_CLIENT = 'RESET_CLIENT';
export const RESET_CLIENT_SUCCESS = 'RESET_SUCCESS';

export const GET_BRAND = 'GET_BRAND';
export const GET_BRAND_SUCCESS = 'GET_BRAND_SUCCESS';
export const GET_BRAND_FAIL = 'GET_BRAND_FAIL';

export const GET_BRANDS = 'GET_BRANDS';
export const GET_BRANDS_SUCCESS = 'GET_BRANDS_SUCCESS';
export const GET_BRANDS_FAIL = 'GET_BRANDS_FAIL';


export class GetClients implements Action {
  readonly type = GET_CLIENTS;
}

export class GetClientsSuccess implements Action {
  readonly type = GET_CLIENTS_SUCCESS;

  constructor(public payload: { clients: ClientsState['clients'] }) { }
}

export class GetClientsFail implements Action {
  readonly type = GET_CLIENTS_FAIL;

  constructor(readonly payload: HttpErrorResponse) { }
}

export class GetClient implements Action {
  readonly type = GET_CLIENT;

  constructor(public payload: { id: string }) { }
}

export class GetClientSuccess implements Action {
  readonly type = GET_CLIENT_SUCCESS;

  constructor(public payload: { client: Client }) { }
}

export class GetClientFail implements Action {
  readonly type = GET_CLIENT_FAIL;

  constructor(readonly payload: HttpErrorResponse) { }
}

export class SendMarketRequest implements Action {
  readonly type = SEND_MARKET_REQUEST;

  constructor(public payload: { clientId: string, countryCode: string }) { }
}

export class SendMarketRequestSuccess implements Action {
  readonly type = SEND_MARKET_REQUEST_SUCCESS;

  constructor(public payload: { client: Client }) { }
}

export class SendMarketRequestFail implements Action {
  readonly type = SEND_MARKET_REQUEST_FAIL;

  constructor(readonly payload: HttpErrorResponse) { }
}

export class ResetClient implements Action {
  readonly type = RESET_CLIENT;
}

export class ResetClientSuccess implements Action {
  readonly type = RESET_CLIENT_SUCCESS;
}

export class GetBrand implements Action {
  readonly type = GET_BRAND;

  constructor(public payload: { id: string }) { }
}

export class GetBrandSuccess implements Action {
  readonly type = GET_BRAND_SUCCESS;

  constructor(public payload: { brand: Brand }) { }
}

export class GetBrandFail implements Action {
  readonly type = GET_BRAND_FAIL;

  constructor(readonly payload: HttpErrorResponse) { }
}

export class GetBrands implements Action {
  readonly type = GET_BRANDS;

  constructor(public payload: { id: string, countryCode: string }) { }
}

export class GetBrandsSuccess implements Action {
  readonly type = GET_BRANDS_SUCCESS;

  constructor(public payload: { brands: Brand[] }) { }
}

export class GetBrandsFail implements Action {
  readonly type = GET_BRANDS_FAIL;

  constructor(readonly payload: HttpErrorResponse) { }
}

export type All =
  | GetClients
  | GetClientsSuccess
  | GetClientsFail
  | GetClient
  | GetClientSuccess
  | GetClientFail
  | ResetClient
  | ResetClientSuccess
  | GetBrand
  | GetBrandSuccess
  | GetBrandFail
  | GetBrands
  | GetBrandsSuccess
  | GetBrandsFail
  | SendMarketRequest
  | SendMarketRequestSuccess
  | SendMarketRequestFail;
