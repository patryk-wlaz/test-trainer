import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ClientsHttpService } from 'app/core/http/clients-http.service';

import * as ClientsActions from './clients.actions';
import { Client, Brand } from './clients.model';
import { defaults } from '@config/defaults';

@Injectable()
export class ClientsEffects {

  public defaults = defaults;

  constructor(private actions$: Actions<ClientsActions.All>, private http: ClientsHttpService) { }

  @Effect() GetClients: Observable<Action> = this.actions$.pipe(
    ofType(ClientsActions.GET_CLIENTS),
    switchMap(() =>
      this.http.getClients().pipe(
        map((clients) => new ClientsActions.GetClientsSuccess({ clients })),
        catchError((err) => [new ClientsActions.GetClientsFail(err)])
      )
    )
  );

  @Effect() GetClient: Observable<Action> = this.actions$.pipe(
    ofType(ClientsActions.GET_CLIENT),
    map((action: ClientsActions.GetClient) => action.payload),
    switchMap((payload) =>
      this.http.getClient(payload).pipe(
        map((client: Client) => {

          client.markets = client.markets.map(country => {
            if (this.defaults.countriesRegionId[country.code]) {
              country.region = defaults.countriesRegionId[country.code];
            }
            return country;
          });

          return new ClientsActions.GetClientSuccess({ client });
        }),
        catchError((err) => [new ClientsActions.GetClientFail(err)])
      )
    )
  );

  @Effect() SendMarketRequest: Observable<Action> = this.actions$.pipe(
    ofType(ClientsActions.SEND_MARKET_REQUEST),
    map((action: ClientsActions.SendMarketRequest) => action.payload),
    switchMap((payload) =>
      this.http.sendRequestForMarket(payload).pipe(
        map((client: Client) => {

          client.markets = client.markets.map(country => {
            if (this.defaults.countriesRegionId[country.code]) {
              country.region = defaults.countriesRegionId[country.code];
            }
            return country;
          });

          return new ClientsActions.SendMarketRequestSuccess({ client });
        }),
        catchError((err) => [new ClientsActions.SendMarketRequestFail(err)])
      )
    )
  );

  @Effect() GetBrand: Observable<Action> = this.actions$.pipe(
    ofType(ClientsActions.GET_BRAND),
    map((action: ClientsActions.GetBrand) => action.payload),
    switchMap((payload) =>
      this.http.getBrand(payload).pipe(
        map((brand: Brand) => new ClientsActions.GetBrandSuccess({ brand })),
        catchError((err) => [new ClientsActions.GetBrandFail(err)])
      )
    )
  );

  @Effect() GetBrands: Observable<Action> = this.actions$.pipe(
    ofType(ClientsActions.GET_BRANDS),
    map((action: ClientsActions.GetBrands) => action.payload),
    switchMap((payload) =>
      this.http.getBrands(payload).pipe(
        map((brands: Brand[]) => new ClientsActions.GetBrandsSuccess({ brands })),
        catchError((err) => [new ClientsActions.GetBrandsFail(err)])
      )
    )
  );
}
