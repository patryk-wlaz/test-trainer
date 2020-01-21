import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as NewsSidebarActions from './news-sidebar.actions';
import { NewsArticle } from './news-sidebar.model';
import { NewsHttpService } from 'app/core/http/news-http.service';

@Injectable()
export class NewsSidebarEffects {
  constructor(
    private actions$: Actions<NewsSidebarActions.All>,
    private http: NewsHttpService
  ) {}

  @Effect() GetNewsArticles: Observable<Action> = this.actions$.pipe(
    ofType(NewsSidebarActions.GET_ARTICLES),
    switchMap(() =>
      this.http.getNewsArticles().pipe(
        map((articles: NewsArticle[]) => new NewsSidebarActions.GetArticlesSuccess(articles)),
        catchError(err => of(new NewsSidebarActions.GetArticlesFail(err)))
      )
    )
  );

}
