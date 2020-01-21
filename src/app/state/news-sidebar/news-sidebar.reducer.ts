import * as _ from 'lodash';

import * as NewsSidebarActions from './news-sidebar.actions';
import { NewsSidebarState, initialState, NewsArticle } from './news-sidebar.model';

export type Action = NewsSidebarActions.All;

const reducerMap = {
  [NewsSidebarActions.NEWS_SIDEBAR_OPEN]: (state: NewsSidebarState) => ({
    ...state,
    opened: true,
  }),
  [NewsSidebarActions.NEWS_SIDEBAR_CLOSE]: (state: NewsSidebarState) => ({
    ...state,
    opened: false,
  }),
  [NewsSidebarActions.GET_ARTICLES]: (state): NewsSidebarState => ({
    ...state,
    loading: true,
  }),
  [NewsSidebarActions.GET_ARTICLES_SUCCESS]: (
    state: NewsSidebarState,
    payload: NewsArticle[]
  ) => ({
      ...state,
      articles: payload,
      loading: false,
  }),
  [NewsSidebarActions.GET_ARTICLES_FAIL]: (state): NewsSidebarState => ({
    ...state,
    loading: false,
  }),
};

export function newsSidebarReducer(state: NewsSidebarState = initialState, action) {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
