import * as campaignsActions          from './campaigns.actions';

import { HttpErrorResponse } from '@angular/common/http';

describe('Store', () => {
  describe('Campaigns', () => {
    describe('Actions', () => {
      describe('Load Campaigns data', () => {
        it('should create an action', () => {
          const action = new campaignsActions.GetCampaigns();

          expect({ ...action }).toEqual({
            type: campaignsActions.CAMPAIGNS_GET_ALL,
            payload: undefined,
          });
        });
      });
      describe('Loaded Campaigns data successfully', () => {
        it('should create an action', () => {
          const payload = { data: { rows: [], count: 0}, shouldClear: false };
          const action = new campaignsActions.GetCampaignsSuccess(payload);

          expect({ ...action }).toEqual({
            type: campaignsActions.CAMPAIGNS_GET_ALL_SUCCESS,
            payload,
          });
        });
      });
      describe('Loaded Campaigns data unsuccessfully', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({});
          const action = new campaignsActions.GetCampaignsFail(payload);

          expect({ ...action }).toEqual({
            type: campaignsActions.CAMPAIGNS_GET_ALL_FAIL,
            payload,
          });
        });
      });
      describe('Set campaigns params', () => {
        it('should create an action', () => {
          const payload = { search: 'ss', status: 'all' };
          const action = new campaignsActions.SetGetCampaignsParams(payload);

          expect({ ...action }).toEqual({
            type: campaignsActions.SET_GET_CAMPAIGNS_PARAMS,
            payload,
          });
        });
      });
    });
  });
});
