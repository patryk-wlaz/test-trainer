import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import * as RouterActions from './router.actions';
import { ChangeRoutePayload } from './router.model';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect({ dispatch: false }) ChangeRoute: Observable<ChangeRoutePayload> = this.actions$.pipe(
    ofType(RouterActions.CHANGE_ROUTE),
    map((action: RouterActions.ChangeRoute) => action.payload),
    tap((payload: ChangeRoutePayload) => {
      const extras = { ...payload.extras };

      return this.router.navigate(payload.linkParams, {
        ...extras,
      });
    })
  );
}
