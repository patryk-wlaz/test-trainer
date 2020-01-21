import * as _ from 'lodash';

import * as CampaignActions from './campaign.actions';

import { initialState, CampaignState } from './campaign.model';
import { GetCampaignResDtoInterface } from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export type Action = CampaignActions.All;

const reducerMap = {
  [CampaignActions.GET_CAMPAIGN]: (state: CampaignState, payload: any) => ({
    ...state,
    campaign: null,
    isLoading: true,
    errorMessage: null,
  }),
  [CampaignActions.GET_CAMPAIGN_SUCCESS]: (state: CampaignState, payload: GetCampaignResDtoInterface) => ({
    ...state,
    campaign: {
      ..._.cloneDeep(state.campaign),
      ...payload,
    },
    isLoading: false,
  }),
  [CampaignActions.GET_CAMPAIGN_FAIL]: (state: CampaignState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),

  [CampaignActions.SAVE_CAMPAIGN]: (state: CampaignState, payload: GetCampaignResDtoInterface) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [CampaignActions.SAVE_CAMPAIGN_SUCCESS]: (state: CampaignState, payload: GetCampaignResDtoInterface) => ({
    ...state,
    campaign: payload,
    isLoading: false,
    errorMessage: null,
  }),
  [CampaignActions.SAVE_CAMPAIGN_FAIL]: (state: CampaignState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),

  [CampaignActions.UPDATE_CAMPAIGN]: (state: CampaignState, payload: {
    campaignId: GetCampaignResDtoInterface['id'], campaignData: GetCampaignResDtoInterface
  }) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),
  [CampaignActions.UPDATE_CAMPAIGN_SUCCESS]: (state: CampaignState, payload: GetCampaignResDtoInterface) => ({
    ...state,
    campaign: payload,
    isLoading: false,
    errorMessage: null,
  }),
  [CampaignActions.UPDATE_CAMPAIGN_FAIL]: (state: CampaignState, payload: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    errorMessage: payload.error,
  }),
};

export function campaignReducer(state: CampaignState = initialState, action: any): CampaignState {
  return _.isFunction(reducerMap[action.type]) ? reducerMap[action.type](state, action.payload) : state;
}
