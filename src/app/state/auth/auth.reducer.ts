import * as _ from 'lodash';

import * as AuthActions from './auth.actions';
import { initialState, AuthState } from './auth.model';
import { GetMyselfResInterface } from '@common/auth/auth.interfaces';

export type Action = AuthActions.All;

const reducerMap = {
  [AuthActions.AUTH_SET_URL_TO_RETURN]: (state: AuthState, payload: string) => ({
    ...state,
    urlToReturn: payload,
  }),
  [AuthActions.RESET_AUTH_STATE]: (state: AuthState, payload?: any) =>
    _.cloneDeep(initialState),
  [AuthActions.GET_CURRENT_USER_SUCCESS]: (state: AuthState, payload: GetMyselfResInterface) => ({
    ...state,
    user: payload,
  }),
};

export function authReducer(state: AuthState = initialState, action: any): AuthState {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
