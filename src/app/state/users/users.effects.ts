import * as _ from 'lodash';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as UsersActions from './users.actions';
import { UsersHttpService } from 'app/core/http/users-http.service';
import { User } from './users.model';
import { setTrackingUserId } from 'app/core/matomo';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsersEffects {

  private renderer: Renderer2;

  constructor(
    private actions$: Actions<UsersActions.All>,
    private http: UsersHttpService,
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  @Effect() GetMyself: Observable<Action> = this.actions$.pipe(
    ofType(UsersActions.USERS_GET_MYSELF),
    switchMap(() =>
      this.http.getMyself().pipe(
        map((user: User) =>
          new UsersActions.GetMyselfSuccess(user)),
        catchError(err => of(new UsersActions.GetMyselfFail(err)))
      )
    )
  );

  @Effect({ dispatch: false }) GetMyselfSuccess: Observable<void> = this.actions$.pipe(
    ofType(UsersActions.USERS_GET_MYSELF_SUCCESS),
    map((action: UsersActions.GetMyselfSuccess) => action.payload),
    map(user => environment.matomoId && setTrackingUserId(user.id)),
    map(() => this.addUserReports())
  );

  // TODO: implement logout (remove user while logging out)
  // @Effect() Logout: Observable<Action> = this.actions$.pipe(
  //   ofType(UsersActions.USERS_LOGOUT),
  //   map(() => environment.matomoId && clearTrackingUserId())
  //   map(() => new Go({ path: ['auth/redirectToLogout']}))
  // );

  public addUserReports(): void {
    const s = this.renderer.createElement('script');
    s.type = 'text/javascript';
    s.src = 'assets/scripts/userreport.js';
    s.async = true;
    this.renderer.appendChild(this.document.body, s);
  }
}
