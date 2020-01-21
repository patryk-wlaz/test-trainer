import * as _ from 'lodash';

import * as CurrenciesActions from './currencies.actions';

import { initialState, CurrenciesState } from './currencies.model';
import { GetCurrenciesResDtoInterface } from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export type Action = CurrenciesActions.All;

const reducerMap = {
  [CurrenciesActions.CURRENCIES_GET_ALL]: (state: CurrenciesState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
    list: [],
  }),
  [CurrenciesActions.CURRENCIES_GET_ALL_SUCCESS]: (state: CurrenciesState, payload: GetCurrenciesResDtoInterface) => ({
    ...state,
    list: payload.rows,
    isLoading: false,
    errorMessage: null,
  }),
  [CurrenciesActions.CURRENCIES_GET_ALL_FAIL]: (state: CurrenciesState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),
};

export function currenciesReducer(state: CurrenciesState = initialState, action: any): CurrenciesState {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
