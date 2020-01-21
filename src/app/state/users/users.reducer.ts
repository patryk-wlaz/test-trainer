import * as _ from 'lodash';

import * as UsersActions from './users.actions';
import { User, UsersState, initialState } from './users.model';

export type Action = UsersActions.All;

const reducerMap = {
  [UsersActions.USERS_GET_MYSELF]: (state: UsersState) => ({
    ...state,
    loading: true,
  }),
  [UsersActions.USERS_GET_MYSELF_SUCCESS]: (
    state: UsersState,
    payload: User
  ) => ({
    ...state,
    myself: payload,
    loading: false,
  }),
  [UsersActions.USERS_GET_MYSELF_FAIL]: (state: UsersState) => ({
    ...state,
    loading: false,
  }),
  [UsersActions.USERS_LOGOUT]: (state: UsersState) => ({
    ...state,
    self: null,
  }),
};

export function usersReducer(state: UsersState = initialState, action) {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
