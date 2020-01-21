import { Action } from '@ngrx/store';

import { ChangeRoutePayload } from './router.model';

export const CHANGE_ROUTE = 'CHANGE_ROUTE';

export class ChangeRoute implements Action {
  readonly type = CHANGE_ROUTE;

  constructor(public payload: ChangeRoutePayload) {}
}

export type All = ChangeRoute;
