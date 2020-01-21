import * as _ from 'lodash';

import * as ClientsActions from './clients.actions';

import { initialState, ClientsState } from './clients.model';
import { GetClientsResDtoInterface } from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export type Action = ClientsActions.All;

const reducerMap = {
  [ClientsActions.CLIENTS_GET_ALL]: (state: ClientsState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
    list: [],
  }),
  [ClientsActions.CLIENTS_GET_ALL_SUCCESS]: (state: ClientsState, payload: GetClientsResDtoInterface) => ({
    ...state,
    list: payload.rows,
    isLoading: false,
    errorMessage: null,
  }),
  [ClientsActions.CLIENTS_GET_ALL_FAIL]: (state: ClientsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),
};

export function clientsReducer(state: ClientsState = initialState, action: any): ClientsState {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
