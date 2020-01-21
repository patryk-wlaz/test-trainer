import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as PersonalActions from './personal.actions';
import { PersonalHttpService } from 'app/core/http/personal-http.service';
import { RecentWorkItem, PersonalContact } from './personal.model';

@Injectable()
export class PersonalEffects {
  constructor(private actions$: Actions<PersonalActions.All>, private http: PersonalHttpService) {}

  @Effect() GetRecentWork: Observable<Action> = this.actions$.pipe(
    ofType(PersonalActions.PERSONAL_GET_RECENT_WORK),
    switchMap(() =>
      this.http.getRecentWork().pipe(
        map((res: RecentWorkItem[]) => new PersonalActions.GetRecentWorkSuccess(res)),
        catchError((err) => of(new PersonalActions.GetRecentWorkFail(err)))
      )
    )
  );

  @Effect() GetPersonalContacts: Observable<Action> = this.actions$.pipe(
    ofType(PersonalActions.PERSONAL_GET_CONTACTS),
    switchMap(() =>
      this.http.getPersonalContacts().pipe(
        map((res: PersonalContact[]) => new PersonalActions.GetPersonalContactsSuccess(res)),
        catchError((err) => of(new PersonalActions.GetPersonalContactsFail(err)))
      )
    )
  );
}
