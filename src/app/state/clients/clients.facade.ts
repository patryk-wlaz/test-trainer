import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app/state';

import * as ClientsActions from './clients.actions';

@Injectable()
export class ClientsFacade {
  public clients$ = this.store.select((state) => state.clients.clients);
  public brands$ = this.store.select((state) => state.clients.brands);
  public selectedClient$ = this.store.select((state) => state.clients.selectedClient);
  public selectedBrand$ = this.store.select((state) => state.clients.selectedBrand);
  public loading$ = this.store.select((state) => state.clients.loading);

  constructor(private store: Store<AppState>) { }

  public getClients(): void {
    this.store.dispatch(new ClientsActions.GetClients());
  }

  public getClient(id: string): void {
    this.store.dispatch(new ClientsActions.GetClient({ id }));
  }

  public sendMarketRequest(clientId: string, countryCode: string): void {
    this.store.dispatch(new ClientsActions.SendMarketRequest({ clientId, countryCode }));
  }

  public getBrand(id: string): void {
    this.store.dispatch(new ClientsActions.GetBrand({ id }));
  }

  public getBrands(id: string, countryCode: string): void {
    this.store.dispatch(new ClientsActions.GetBrands({ id, countryCode }));
  }

  public resetClient(): void {
    this.store.dispatch(new ClientsActions.ResetClient());
  }
}
