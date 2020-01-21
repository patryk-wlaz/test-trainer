import * as _ from 'lodash';

import * as MarketsActions from './markets.actions';

import { initialState, MarketsState } from './markets.model';
import { GetMarketsResDtoInterface } from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export type Action = MarketsActions.All;

const reducerMap = {
  [MarketsActions.MARKETS_GET_ALL]: (state: MarketsState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
    list: [],
  }),
  [MarketsActions.MARKETS_GET_ALL_SUCCESS]: (state: MarketsState, payload: GetMarketsResDtoInterface) => ({
    ...state,
    list: payload.rows,
    isLoading: false,
    errorMessage: null,
  }),
  [MarketsActions.MARKETS_GET_ALL_FAIL]: (state: MarketsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),
};

export function marketsReducer(state: MarketsState = initialState, action: any): MarketsState {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
