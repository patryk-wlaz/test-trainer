import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable, of } from 'rxjs';

import { BaseHttpService } from './base-http.service';
import { NewsArticle } from 'app/state/news-sidebar';

@Injectable()
export class NewsHttpService extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  public getNewsArticles(): Observable<NewsArticle[]> {
    // TODO: currently there is no backend, maybe it's gonna be different than CLIENT_DATA_API_URL
    const request = this.http.get(`${NewsHttpService.CLIENT_DATA_API_URL}/articles`, NewsHttpService.httpOptions);

    return this.handleRequest(request);
  }
}
