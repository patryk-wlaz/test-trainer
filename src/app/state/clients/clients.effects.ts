import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as _ from 'lodash';

import * as ClientsActions from './clients.actions';
import { HttpService } from 'app/core/http/http.service';
import { GetClientsResDtoInterface } from '@common';

@Injectable()
export class ClientsEffects {
  constructor(
    private actions$: Actions<ClientsActions.All>,
    private http: HttpService
  ) {}

  @Effect() getClients: Observable<Action> = this.actions$.pipe(
    ofType(ClientsActions.CLIENTS_GET_ALL),
    switchMap((action: ClientsActions.GetClients) => {
      const search = _.get(action, 'payload.search', '');
      return this.http.getClients(search).pipe(
        map(
          (response: GetClientsResDtoInterface) =>
            new ClientsActions.GetClientsSuccess(response)
        ),
        catchError(err => of(new ClientsActions.GetClientsFail(err)))
      );
    })
  );
}
