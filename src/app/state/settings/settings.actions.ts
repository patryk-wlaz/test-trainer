import { Action } from '@ngrx/store';

import { SettingsState } from './settings.model';
import { HttpErrorResponse } from '@angular/common/http';

export const GET_VERSION = 'GET_VERSION';
export const GET_VERSION_SUCCESS = 'GET_VERSION_SUCCESS';
export const GET_VERSION_FAIL = 'GET_VERSION_FAIL';

export class GetVersion implements Action {
  readonly type = GET_VERSION;

  constructor(readonly payload?: null) {}
}
export class GetVersionSuccess implements Action {
  readonly type = GET_VERSION_SUCCESS;

  constructor(readonly payload: SettingsState['version']) {}
}
export class GetVersionFail implements Action {
  readonly type = GET_VERSION_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export type All = GetVersion
  | GetVersionSuccess
  | GetVersionFail;
