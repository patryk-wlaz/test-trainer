import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app/state';

import * as RouterActions from './router.actions';
import { ChangeRoutePayload } from './router.model';

@Injectable()
export class RouterFacade {
  constructor(private store: Store<AppState>) {}

  public changeRoute(params: ChangeRoutePayload): void {
    this.store.dispatch(new RouterActions.ChangeRoute(params));
  }
}
