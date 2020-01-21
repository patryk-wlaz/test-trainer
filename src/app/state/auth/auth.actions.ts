import { Action } from '@ngrx/store';
import { GetMyselfResInterface } from '@common/auth/auth.interfaces';

export const AUTH_SET_URL_TO_RETURN = '[Auth] Set Url To Return';
export const RESET_AUTH_STATE = '[Auth] Reset Auth State';
export const GET_CURRENT_USER_SUCCESS = '[Auth] Get current user success';

export class SetUrlToReturn implements Action {
  readonly type = AUTH_SET_URL_TO_RETURN;

  constructor(readonly payload: string) {}
}

export class ResetAuthState implements Action {
  readonly type = RESET_AUTH_STATE;

  constructor(readonly payload?: any) {}
}

export class GetCurrentUserSuccess implements Action {
  readonly type = GET_CURRENT_USER_SUCCESS;

  constructor(readonly payload: GetMyselfResInterface) {}
}

export type All =
  | SetUrlToReturn
  | ResetAuthState
  | GetCurrentUserSuccess;
