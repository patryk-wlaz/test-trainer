import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app/state';

import * as UsersActions from './users.actions';

@Injectable()
export class UsersFacade {
  public myself$ = this.store.select((state) => state.users.myself);
  public loading$ = this.store.select((state) => state.users.loading);

  constructor(private store: Store<AppState>) {}

  public getMyself(): void {
    this.store.dispatch(new UsersActions.GetMyself());
  }
}
