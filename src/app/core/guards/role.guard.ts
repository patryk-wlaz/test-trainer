import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';

import { UsersFacade } from 'src/app/state/users';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private usersFacade: UsersFacade) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.usersFacade.loading$.pipe(
      filter((loading) => !loading),
      take(1),
      switchMap(() => {
        return this.usersFacade.myself$.pipe(
          map((user) => {
            if (user && user.userRoles) {
              const isUserAuthorize = user.userRoles.some((role) =>
                route.data.userRole.includes(role.name)
              );
              if (isUserAuthorize) {
                return true;
              }
            }

            // TODO: redirect user to Access denied page
            const urlTree = this.router.createUrlTree(['/']);
            return urlTree;
          })
        );
      })
    );
  }
}
