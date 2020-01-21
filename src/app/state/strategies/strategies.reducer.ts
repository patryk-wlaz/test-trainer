import * as _ from 'lodash';

import * as StrategiesActions from './strategies.actions';

import { initialState, StrategiesState } from './strategies.model';
import { safeJSONParse } from 'src/app/shared/utils/safe-json-parse';

export type Action = StrategiesActions.All;

const reducerMap = {
  [StrategiesActions.STRATEGIES_GET_FOR_CAMPAIGN]: (state, payload): StrategiesState => ({
    ...state,
    list: [],
    isLoading: true,
    errorMessage: null,
  }),
  [StrategiesActions.STRATEGIES_GET_FOR_CAMPAIGN_SUCCESS]: (state, payload): StrategiesState => ({
    ...state,
    list: payload.map(strategy => ({
      ...strategy,
      values: safeJSONParse(strategy.values),
    })),
    isLoading: false,
    errorMessage: null,
  }),
  [StrategiesActions.STRATEGIES_GET_FOR_CAMPAIGN_FAIL]: (state, payload: Error): StrategiesState => ({
    ...state,
    isLoading: false,
    errorMessage: payload.message,
  }),
  [StrategiesActions.STRATEGIES_UPDATE_STRATEGY]: (state, payload): StrategiesState => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [StrategiesActions.STRATEGIES_UPDATE_STRATEGY_SUCCESS]: (state, payload): StrategiesState => ({
    ...state,
    list: state.list.map(strategy => ({
      ...strategy,
      values: payload.id === strategy.id
        ? safeJSONParse(payload.values)
        : strategy.values,
    })),
    isLoading: false,
    errorMessage: null,
  }),
  // [StrategiesActions.STRATEGIES_UPDATE_STRATEGY_FAIL]: (state, payload: Error): StrategiesState => ({
  //   ...state,
  //   isLoading: false,
  //   errorMessage: payload.message,
  // }),
};

export function strategiesReducer(state: StrategiesState = initialState, action: Action): StrategiesState {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
