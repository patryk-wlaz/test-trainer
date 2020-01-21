import * as _ from 'lodash';
import { HttpErrorResponse } from '@angular/common/http';

import * as KeywordsActions from './keywords.actions';
import { initialState, KeywordsState } from './keywords.model';
import {
  BulkUpdateKeywordsDtoInterface,
  CreateKeywordsResDtoInterface,
  GetKeywordResDtoInterface,
  GetKeywordsResDtoInterface,
  Keyword,
  KeywordTypeToIndex,
} from '@common';
import { KeywordTypes } from '@common';

export const calculateBudget = keywords => {
  if (!_.isNumber(_.get(keywords, '[0].budget'))) {
    return null;
  }
  return _(keywords
    .filter(keyword => keyword.active)
    .reduce((acc, keyword) => {
      acc[keyword.type].budget += keyword.budget;
      acc[keyword.type].arh.push(keyword.arh);

      return acc;
    }, {
      [KeywordTypes.BRAND]: {
        budget: null,
        arh: [],
      },
      [KeywordTypes.GENERIC]: {
        budget: null,
        arh: [],
      },
      [KeywordTypes.COMPETITOR]: {
        budget: null,
        arh: [],
      },
    }))
    .mapValues(value => ({
      ...value,
      arh: value.arh.length
        ? value.arh.reduce((acc, curr) => acc + curr, 0) / value.arh.length
        : null,
    }))
    .value();
};

export type Action = KeywordsActions.All;

const reducerMap = {
  [KeywordsActions.ADD_KEYWORDS]: (state: KeywordsState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [KeywordsActions.LOAD_API_KEYWORDS]: (state: KeywordsState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [KeywordsActions.ADD_KEYWORDS_SUCCESS]: (state: KeywordsState, payload: CreateKeywordsResDtoInterface) => ({
    ...state,
    isLoading: false,
    errorMessage: null,
    list: [...payload.keywords, ...state.list],
  }),
  [KeywordsActions.LOAD_API_KEYWORDS_SUCCESS]: (state: KeywordsState, payload: CreateKeywordsResDtoInterface) => ({
    ...state,
    isLoading: false,
    errorMessage: null,
    list: [
      ..._.filter(state.list, keyword => keyword.type !== _.get(payload, 'keywords[0].type')),
      ...payload.keywords,
    ],
  }),
  [KeywordsActions.ADD_KEYWORDS_FAIL]: (state: KeywordsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error.message,
  }),

  [KeywordsActions.GET_KEYWORDS]: (state: KeywordsState) => ({
    ...state,
    list: [],
    isLoading: true,
    errorMessage: null,
  }),
  [KeywordsActions.GET_KEYWORDS_SUCCESS]: (state: KeywordsState, payload: GetKeywordsResDtoInterface) => ({
    ...state,
    isLoading: false,
    errorMessage: null,
    list: payload.rows,
    budget: calculateBudget(payload.rows),
  }),
  [KeywordsActions.GET_KEYWORDS_FAIL]: (state: KeywordsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),

  [KeywordsActions.UPDATE_KEYWORD]: (state: KeywordsState, payload) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [KeywordsActions.UPDATE_KEYWORD_SUCCESS]: (state: KeywordsState, payload: GetKeywordResDtoInterface) => ({
    ...state,
    list: state.list.map((keyword) => keyword.id === payload.id
      ? _.assign({}, keyword, payload)
      : keyword),
    isLoading: false,
    errorMessage: null,
  }),
  [KeywordsActions.UPDATE_KEYWORD_FAIL]: (state: KeywordsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),

  [KeywordsActions.UPDATE_KEYWORDS]: (state: KeywordsState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [KeywordsActions.UPDATE_KEYWORDS_SUCCESS]: (state: KeywordsState, payload: BulkUpdateKeywordsDtoInterface) => ({
    ...state,
    list: state.list.map((keyword) => {
      const found = _.find(payload, (updatedKeyword) => updatedKeyword.id === keyword.id);
      return found ? _.assign({}, keyword, found) : keyword;
    }),
    isLoading: false,
    errorMessage: null,
  }),
  [KeywordsActions.UPDATE_KEYWORDS_FAIL]: (state: KeywordsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),

  [KeywordsActions.DELETE_KEYWORD]: (state: KeywordsState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [KeywordsActions.DELETE_KEYWORD_SUCCESS]: (state: KeywordsState, keywordId: Keyword['id']) => {
    const oldList = state.list;
    const updatedList = _.filter(oldList, keyword => keyword.id !== keywordId);
    return ({
      ...state,
      list: updatedList,
      isLoading: false,
      errorMessage: null,
    });
  },
  [KeywordsActions.DELETE_KEYWORD_FAIL]: (state: KeywordsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),
  [KeywordsActions.SET_CURRENT_TAB]: (state: KeywordsState, payload: { currentTab: KeywordTypeToIndex }) => ({
    ...state,
    currentTab: payload.currentTab,
  }),
};

export function keywordsReducer(state: KeywordsState = initialState, action: any): KeywordsState {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
