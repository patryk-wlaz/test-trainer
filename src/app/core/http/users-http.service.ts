import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

import { BaseHttpService } from './base-http.service';
import { User } from 'app/state/users';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsersHttpService extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  public getMyself(): Observable<User> {
    // TODO: using client_data is a temporary solution - use auth tool when it gets connected to ingress
    const request = environment.production
      ? this.http.get(
        `${UsersHttpService.CLIENT_DATA_API_URL}/users/myself`,
        UsersHttpService.httpOptions
      )
      : this.http.get(
        `${UsersHttpService.CLIENT_DATA_API_URL}/mockedusers/myself`,
        UsersHttpService.httpOptions
      );

    return this.handleRequest(request);
  }
}
