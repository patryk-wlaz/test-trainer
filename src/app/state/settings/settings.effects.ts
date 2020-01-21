import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as SettingsActions from './settings.actions';
import { AppState } from 'app/state';
import { HttpService } from 'app/core/http/http.service';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions<SettingsActions.All>,
    private router: Router,
    private store: Store<AppState>,
    private http: HttpService,
  ) {}

  @Effect() getVersion: Observable<Action> = this.actions$.pipe(
    ofType(SettingsActions.GET_VERSION),
    switchMap(() =>
      this.http.getVersion().pipe(
        map(
          (response: string) =>
            new SettingsActions.GetVersionSuccess(response)
        ),
        catchError(err => of(new SettingsActions.GetVersionFail(err)))
      ))
  );
}
