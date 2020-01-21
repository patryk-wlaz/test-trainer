import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { Go } from '../router';

@Injectable()
export class AuthEffects {
  constructor (
    private actions$: Actions<AuthActions.All>
  ) { }

  @Effect() Logout: Observable<Action> = this.actions$.pipe(
    ofType(AuthActions.RESET_AUTH_STATE),
    map(() => new Go({ path: ['login'] }))
  );
}
