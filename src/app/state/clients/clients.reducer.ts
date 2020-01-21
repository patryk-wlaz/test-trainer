import * as _ from 'lodash';

import { IAction } from '..';

import * as ClientsActions from './clients.actions';
import { initialState, ClientsState, Brand } from './clients.model';

export type Action = ClientsActions.All;

const reducerMap = {
  [ClientsActions.GET_CLIENTS]: (state): ClientsState => ({
    ...state,
    loading: true,
  }),
  [ClientsActions.GET_CLIENTS_SUCCESS]: (
    state,
    payload: { clients: ClientsState['clients'] }
  ): ClientsState => ({
    ...state,
    clients: payload.clients,
    loading: false,
  }),
  [ClientsActions.GET_CLIENTS_FAIL]: (state): ClientsState => ({
    ...state,
    loading: false,
  }),
  [ClientsActions.GET_CLIENT]: (state): ClientsState => ({
    ...state,
    loading: true,
  }),
  [ClientsActions.GET_CLIENT_SUCCESS]: (
    state,
    payload: { client: ClientsState['selectedClient'] }
  ): ClientsState => ({
    ...state,
    loading: false,
    selectedClient: payload.client,
  }),
  [ClientsActions.RESET_CLIENT]: (
    state
  ): ClientsState => ({
    ...state,
    loading: false,
    selectedClient: null,
  }),
  [ClientsActions.GET_CLIENT_FAIL]: (state): ClientsState => ({
    ...state,
    loading: false,
  }),
  [ClientsActions.GET_BRANDS]: (state): ClientsState => ({
    ...state,
    loading: true,
  }),
  [ClientsActions.GET_BRANDS_SUCCESS]: (
    state,
    payload: { brands: Brand[] }
  ): ClientsState => ({
    ...state,
    loading: false,
    brands: payload.brands,
  }),
  [ClientsActions.GET_CLIENT_FAIL]: (state): ClientsState => ({
    ...state,
    loading: false,
  }),
  [ClientsActions.GET_BRAND]: (state): ClientsState => ({
    ...state,
    loading: true,
  }),
  [ClientsActions.GET_BRAND_SUCCESS]: (
    state,
    payload: { brand: Brand }
  ): ClientsState => ({
    ...state,
    loading: false,
    selectedBrand: payload.brand,
  }),
  [ClientsActions.GET_BRAND_FAIL]: (state): ClientsState => ({
    ...state,
    loading: false,
  }),
};

export function clientsReducer(state: ClientsState = initialState, action: IAction) {
  return _.isFunction(reducerMap[action.type])
    ? reducerMap[action.type](state, action.payload)
    : state;
}
