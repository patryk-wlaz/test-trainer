import * as _ from 'lodash';

import * as SettingsActions from './settings.actions';

import { initialState, SettingsState } from './settings.model';

export type Action = SettingsActions.All;

const reducerMap = {
  [SettingsActions.GET_VERSION_SUCCESS]: (state: SettingsState, payload: SettingsState['version']): SettingsState => ({
    ...state,
    version: payload,
  }),
};

export function settingsReducer(state: SettingsState = initialState, action: Action) {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
