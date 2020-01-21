import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as _ from 'lodash';
import { Observable } from 'rxjs';

import { BaseHttpService } from './base-http.service';
import { Client, ClientsState, Brand } from 'app/state/clients';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientsHttpService extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  public getClients(): Observable<ClientsState['clients']> {
    const request = environment.production
      ? this.http.get(
        `${ClientsHttpService.CLIENT_DATA_API_URL}/clients`,
        ClientsHttpService.httpOptions
      )
      : this.http.get(
        `${ClientsHttpService.CLIENT_DATA_API_URL}/mockedclients`,
        ClientsHttpService.httpOptions
      );
    return this.handleRequest(request);
  }

  public getClient(payload: { id: string }): Observable<Client> {
    const request = environment.production
      ? this.http.get(
        `${ClientsHttpService.CLIENT_DATA_API_URL}/clients/${payload.id}`,
        ClientsHttpService.httpOptions
      )
      : this.http
        .get(
          `${ClientsHttpService.CLIENT_DATA_API_URL}/mockedclients`,
          ClientsHttpService.httpOptions
        )
        .pipe(
          map((mockedClients: any) => {
            return mockedClients.find((client) => client.id === payload.id);
          })
        );
    return this.handleRequest(request);
  }

  public getBrands(payload: { id: string, countryCode: string }): Observable<Brand[]> {
    const request = environment.production
      ? this.http.get(
        `${ClientsHttpService.CLIENT_DATA_API_URL}/clients/${payload.id}/${payload.countryCode}/brands`,
        ClientsHttpService.httpOptions
      )
      : this.http.get(
        `${ClientsHttpService.CLIENT_DATA_API_URL}/mockedbrands`,
        ClientsHttpService.httpOptions
      );

    return this.handleRequest(request);
  }

  public getBrand(payload: { id: string }): Observable<Brand> {
    const request = environment.production
      ? this.http.get(
        `${ClientsHttpService.CLIENT_DATA_API_URL}/brands/${payload.id}`,
        ClientsHttpService.httpOptions
      )
      : this.http.get(
        `${ClientsHttpService.CLIENT_DATA_API_URL}/mockedbrands/${payload.id}`,
        ClientsHttpService.httpOptions
      );

    return this.handleRequest(request);
  }

  public sendRequestForMarket({ clientId, countryCode }:
    { clientId: string, countryCode: string }): Observable<Client> {
    const request = this.http.post(
      `${ClientsHttpService.CLIENT_DATA_API_URL}/clients/${clientId}/request-access`,
      { countryCode }, ClientsHttpService.httpOptions
    );

    return this.handleRequest(request);
  }
}
