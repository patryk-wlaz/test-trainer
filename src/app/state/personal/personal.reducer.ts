import * as _ from 'lodash';

import * as PersonalActions from './personal.actions';
import { PersonalState, initialState, RecentWorkItem, PersonalContact } from './personal.model';

export type Action = PersonalActions.All;

const reducerMap = {
  [PersonalActions.PERSONAL_GET_RECENT_WORK]: (state: PersonalState) => ({
    ...state,
    loading: true,
  }),
  [PersonalActions.PERSONAL_GET_RECENT_WORK_SUCCESS]: (
    state: PersonalState,
    payload: RecentWorkItem[]
  ) => ({
    ...state,
    recentWork: payload,
    loading: false,
  }),
  [PersonalActions.PERSONAL_GET_RECENT_WORK_FAIL]: (state: PersonalState) => ({
    ...state,
    loading: false,
  }),
  [PersonalActions.PERSONAL_GET_CONTACTS]: (state: PersonalState) => ({
    ...state,
    loading: true,
  }),
  [PersonalActions.PERSONAL_GET_CONTACTS_SUCCESS]: (
    state: PersonalState,
    payload: PersonalContact[]
  ) => ({
    ...state,
    personalContacts: payload,
    loading: false,
  }),
  [PersonalActions.PERSONAL_GET_CONTACTS_FAIL]: (state: PersonalState) => ({
    ...state,
    loading: false,
  }),
};

export function personalReducer(state: PersonalState = initialState, action) {
  return _.isFunction(reducerMap[action.type])
    ? reducerMap[action.type](state, action.payload)
    : state;
}
