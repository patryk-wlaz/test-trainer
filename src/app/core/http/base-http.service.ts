import * as _ from 'lodash';
import { saveAs } from 'file-saver';
import { HttpParams } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Go } from 'app/state/router';

export class BaseHttpService {
  static API_URL = environment.apiUrl;
  static ERROR_TYPE = 'HTTP_ERROR';

  constructor(private store$) {}

  public handleError(err) {
    _.assign(err, { type: BaseHttpService.ERROR_TYPE });

    if (err.status === 401) {
      this.store$.dispatch(new Go({ path: ['login'] }));
    }

    if (err.status === 403) {
      this.store$.dispatch(new Go({ path: ['forbidden'] }));
    }

    return throwError(err);
  }

  public handleRequest(requestObservable: Observable<any>) {
    return requestObservable.pipe(catchError(err => this.handleError(err)));
  }

  public handleFileRequest(requestObservable: Observable<any>, filename = 'file.txt') {
    return requestObservable.pipe(
      map(response => {
        const blob = new Blob([response], { type: 'application/octet-stream' });
        saveAs(blob, filename);
        return response;
      }),
      catchError(err => this.handleError(err)),
    );
  }

  public parseQueryParams(params): HttpParams {
    let queryParams = new HttpParams();
    _.forIn(params, (value, key) => {
      queryParams = queryParams.append(key, _.toString(value));
    });
    return queryParams;
  }
}
