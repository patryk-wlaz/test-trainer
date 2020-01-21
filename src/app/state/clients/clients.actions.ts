import { Action } from '@ngrx/store';
import { GetClientsResDtoInterface } from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export const CLIENTS_GET_ALL = '[Clients] Get All';
export const CLIENTS_GET_ALL_SUCCESS = '[Clients] Get All Success';
export const CLIENTS_GET_ALL_FAIL = '[Clients] Get All Fail';

export class GetClients implements Action {
  readonly type = CLIENTS_GET_ALL;

  constructor(readonly payload?: null) {}
}

export class GetClientsSuccess implements Action {
  readonly type = CLIENTS_GET_ALL_SUCCESS;

  constructor(readonly payload: GetClientsResDtoInterface) {}
}

export class GetClientsFail implements Action {
  readonly type = CLIENTS_GET_ALL_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export type All =
  | GetClients
  | GetClientsSuccess
  | GetClientsFail;
