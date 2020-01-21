import { HttpParams, HttpHeaders } from '@angular/common/http';

import * as _ from 'lodash';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'app/../environments/environment';

export interface BlobResponse {
  headers: HttpHeaders;
  body: Blob;
}

export class BaseHttpService {
  static CLIENT_DATA_API_URL = environment.clientDataApiUrl;
  static ERROR_TYPE = 'HTTP_ERROR';

  static httpOptions = {
    withCredentials: true,
  };

  public handleError(err: Error): Observable<never> {
    _.assign(err, { type: BaseHttpService.ERROR_TYPE });
    return throwError(err);
  }

  public handleRequest(requestObservable: Observable<any>): Observable<any> {
    return requestObservable.pipe(catchError((err) => this.handleError(err)));
  }

  public parseQueryParams(params): HttpParams {
    let queryParams = new HttpParams();
    _.forIn(params, (value, key) => {
      queryParams = queryParams.append(key, _.toString(value));
    });
    return queryParams;
  }
}
