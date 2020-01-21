import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

import { BaseHttpService } from './base-http.service';
import { RecentWorkItem, PersonalContact } from 'app/state/personal';

@Injectable()
export class PersonalHttpService extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  public getRecentWork(): Observable<RecentWorkItem[]> {
    // TODO: currently there is no backend, maybe it's gonna be different than CLIENT_DATA_API_URL
    const request = this.http.get(
      `${PersonalHttpService.CLIENT_DATA_API_URL}/recentWork`,
      PersonalHttpService.httpOptions
    );

    return this.handleRequest(request);
  }

  public getPersonalContacts(): Observable<PersonalContact[]> {
    // TODO: currently there is no backend
    const request =
      this.http.get(`${PersonalHttpService.CLIENT_DATA_API_URL}/contacts`, PersonalHttpService.httpOptions);
    return this.handleRequest(request);
  }
}
