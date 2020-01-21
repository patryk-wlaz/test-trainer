import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app/state';

import * as PersonalActions from './personal.actions';

@Injectable()
export class PersonalFacade {
  public recentWork$ = this.store.select((state) => state.personal.recentWork);
  public personalContacts$ = this.store.select((state) => state.personal.personalContacts);
  public loading$ = this.store.select((state) => state.personal.loading);

  constructor(private store: Store<AppState>) {}

  public getRecentWork(): void {
    this.store.dispatch(new PersonalActions.GetRecentWork());
  }

  public getPersonalContacts(): void {
    this.store.dispatch(new PersonalActions.GetPersonalContacts());
  }
}
