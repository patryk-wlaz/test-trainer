import { Action } from '@ngrx/store';
import { NewsArticle } from './news-sidebar.model';

export const NEWS_SIDEBAR_OPEN = 'NEWS_SIDEBAR_OPEN';
export const NEWS_SIDEBAR_CLOSE = 'NEWS_SIDEBAR_CLOSE';

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAIL = 'GET_ARTICLES_FAIL';

export class OpenNewsSidebar implements Action {
  readonly type = NEWS_SIDEBAR_OPEN;
}

export class CloseNewsSidebar implements Action {
  readonly type = NEWS_SIDEBAR_CLOSE;
}

export class GetArticles implements Action {
  readonly type = GET_ARTICLES;

  constructor(readonly payload?: any) {}
}

export class GetArticlesSuccess implements Action {
  readonly type = GET_ARTICLES_SUCCESS;

  constructor(readonly payload: NewsArticle[]) {}
}

export class GetArticlesFail implements Action {
  readonly type = GET_ARTICLES_FAIL;

  constructor(readonly payload: any) {}
}

export type All =
  | OpenNewsSidebar
  | CloseNewsSidebar
  | GetArticles
  | GetArticlesSuccess
  | GetArticlesFail;
