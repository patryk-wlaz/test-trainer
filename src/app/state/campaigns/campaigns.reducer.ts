import * as _ from 'lodash';

import * as CampaignsActions from './campaigns.actions';

import { initialState, CampaignsState, CampaignsParams, CAMPAIGNS_PER_REQUEST } from './campaigns.model';
import { GetCampaignsResDtoInterface, GetCampaignResDtoInterface } from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export type Action = CampaignsActions.All;

const reducerMap = {
  [CampaignsActions.CAMPAIGNS_GET_ALL]: (state: CampaignsState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
    list: [],
  }),
  [CampaignsActions.CAMPAIGNS_GET_ALL_SUCCESS]: (
    state: CampaignsState,
    payload: { data: GetCampaignsResDtoInterface, shouldClear: boolean }) => ({
      ...state,
      count: payload.data.rows,
      list: payload.shouldClear ? payload.data.rows : [...state.list, ...payload.data.rows],
      isLoading: false,
  }),
  [CampaignsActions.CAMPAIGNS_GET_ALL_FAIL]: (state: CampaignsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),
  [CampaignsActions.SET_GET_CAMPAIGNS_PARAMS]: (state: CampaignsState, payload: CampaignsParams) => ({
    ...state,
    getCampaignsParams: {
      ...state.getCampaignsParams,
      ...payload,
    },
    isLoading: true,
    errorMessage: null,
  }),
  [CampaignsActions.HANDLE_INFINITY_SCROLL]: (state: CampaignsState, payload: any) => ({
    ...state,
    getCampaignsParams: {
      ...state.getCampaignsParams,
      offset: state.getCampaignsParams.offset + CAMPAIGNS_PER_REQUEST,
    },
  }),
  [CampaignsActions.REMOVE_CAMPAIGN]: (state: CampaignsState) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [CampaignsActions.REMOVE_CAMPAIGN_SUCCESS]: (state: CampaignsState, payload: GetCampaignResDtoInterface['id']) => ({
    ...state,
    list: _.filter(state.list, oldCampaign => oldCampaign.id !== payload),
    isLoading: false,
    errorMessage: null,
  }),
  [CampaignsActions.REMOVE_CAMPAIGN_FAIL]: (state: CampaignsState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),
};

export function campaignsReducer(state: CampaignsState = initialState, action: any): CampaignsState {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
