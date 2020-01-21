import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpService } from 'app/core/http/http.service';
import {
  switchMap,
  catchError,
  map,
} from 'rxjs/operators';

import { AppState } from 'app/state';
import { Go } from 'app/state/router';
import { SetUrlToReturn } from 'app/state/auth';
import { GetCurrentUserSuccess } from 'app/state/auth/auth.actions';
import { GetMyselfResInterface } from '@common';

// tslint:disable-next-line:max-line-length

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private store$: Store<AppState>, private http: HttpService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.checkUser().pipe(
      switchMap(canGoFurther => {
        if (!canGoFurther && state.url !== '/forbidden') { this.failureRedirectTo('forbidden'); }
        return of(true);
      }),
      catchError((e) => {
        if (e.status === 403) {
          // because someone thought that putting forbidden page in the authorized module is a good idea
          // and simple moving it to the unauthorized breaks layout:
          return state.url === '/forbidden'
            ? of(true)
            : this.failureRedirectTo('forbidden');
        }
        return this.failureRedirectTo('login');
      })
    );
  }

  checkUser(): Observable<boolean> {
    return this.store$.pipe(
      select((state: AppState) => state.auth.user),
      switchMap((user: GetMyselfResInterface | null) => {
        if (user) { return of(true); }
        return this.http.getMyself()
          .pipe(map((userRes: GetMyselfResInterface) => {
            this.store$.dispatch(new GetCurrentUserSuccess(userRes));
            return true;
          }));
      })
    );
  }

  private failureRedirectTo(url: 'forbidden' | 'login'): Observable<boolean> {
    this.store$.dispatch(new SetUrlToReturn(''));
    this.store$.dispatch(new Go({
      path: [url],
    }));
    return of(false);
  }
}
