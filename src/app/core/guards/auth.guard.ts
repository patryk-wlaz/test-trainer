import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map, filter, take } from 'rxjs/operators';

import { UsersFacade } from 'src/app/state/users';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private usersFacade: UsersFacade, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.usersFacade.myself$.pipe(
      take(1),
      switchMap((userFromStore) => {
        if (userFromStore) {
          return of(true);
        }
        this.usersFacade.getMyself();
        return this.usersFacade.loading$.pipe(
          filter((loading) => !loading),
          switchMap(() =>
            this.usersFacade.myself$.pipe(
              map((userLoadedFromBackend) => {
                if (userLoadedFromBackend) {
                  return true;
                }
                const urlTree = this.router.createUrlTree(['/login']);
                return urlTree;
              })
            )
          )
        );
      })
    );
  }
}
