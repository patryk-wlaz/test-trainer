import { Action } from '@ngrx/store';
import { RecentWorkItem, PersonalContact } from './personal.model';
import { HttpErrorResponse } from '@angular/common/http';

export const PERSONAL_GET_RECENT_WORK = 'PERSONAL_GET_RECENT_WORK';
export const PERSONAL_GET_RECENT_WORK_SUCCESS = 'PERSONAL_GET_RECENT_WORK_SUCCESS';
export const PERSONAL_GET_RECENT_WORK_FAIL = 'PERSONAL_GET_RECENT_WORK_FAIL';

export const PERSONAL_GET_CONTACTS = 'PERSONAL_GET_CONTACTS';
export const PERSONAL_GET_CONTACTS_SUCCESS = 'PERSONAL_GET_CONTACTS_SUCCESS';
export const PERSONAL_GET_CONTACTS_FAIL = 'PERSONAL_GET_CONTACTS_FAIL';

export class GetRecentWork implements Action {
  readonly type = PERSONAL_GET_RECENT_WORK;

  constructor(readonly payload?: any) {}
}

export class GetRecentWorkSuccess implements Action {
  readonly type = PERSONAL_GET_RECENT_WORK_SUCCESS;

  constructor(readonly payload: RecentWorkItem[]) {}
}

export class GetRecentWorkFail implements Action {
  readonly type = PERSONAL_GET_RECENT_WORK_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export class GetPersonalContacts implements Action {
  readonly type = PERSONAL_GET_CONTACTS;

  constructor(readonly payload?: any) {}
}

export class GetPersonalContactsSuccess implements Action {
  readonly type = PERSONAL_GET_CONTACTS_SUCCESS;

  constructor(readonly payload: PersonalContact[]) {}
}

export class GetPersonalContactsFail implements Action {
  readonly type = PERSONAL_GET_CONTACTS_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export type All =
  | GetRecentWork
  | GetRecentWorkSuccess
  | GetRecentWorkFail
  | GetPersonalContacts
  | GetPersonalContactsSuccess
  | GetPersonalContactsFail;
