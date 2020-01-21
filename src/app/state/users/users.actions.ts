import { Action } from '@ngrx/store';
import { User } from './users.model';
import { HttpErrorResponse } from '@angular/common/http';

export const USERS_GET_MYSELF = 'USERS_GET_MYSELF';
export const USERS_GET_MYSELF_SUCCESS = 'USERS_GET_MYSELF_SUCCESS';
export const USERS_GET_MYSELF_FAIL = 'USERS_GET_MYSELF_FAIL';
export const USERS_LOGOUT = 'USERS_LOGOUT';


export class GetMyself implements Action {
  readonly type = USERS_GET_MYSELF;

  constructor(readonly payload?: any) {}
}

export class GetMyselfSuccess implements Action {
  readonly type = USERS_GET_MYSELF_SUCCESS;

  constructor(readonly payload: User) {}
}

export class GetMyselfFail implements Action {
  readonly type = USERS_GET_MYSELF_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export class Logout implements Action {
  readonly type = USERS_LOGOUT;

  constructor(readonly payload?: any) {}
}

export type All =
  | Logout
  | GetMyself
  | GetMyselfSuccess
  | GetMyselfFail;
