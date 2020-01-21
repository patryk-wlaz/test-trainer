import * as campaignsActions from './campaign.actions';

import { HttpErrorResponse } from '@angular/common/http';

describe('Store', () => {
  describe('Campaign', () => {
    describe('Actions', () => {
      describe('Load Campaign data', () => {
        it('should create an action', () => {
          const sampleId = 5212;
          const action = new campaignsActions.GetCampaign(sampleId);

          expect({ ...action }).toEqual({
            type: campaignsActions.GET_CAMPAIGN,
            payload: sampleId,
          });
        });
      });
      describe('Load Campaign data successfully', () => {
        it('should create an action', () => {
          const payload = {
            id: '',
            clientId: '',
            brandId: '',
            startDate: new Date(),
            endDate: new Date(),
            budget: 0,
            name: '',
            marketId: '',
            currencyId: '',
            description: '',
            step: 0,
            adsShare: [20, 50, 30],
            active: true,
            impressionShareStrategy: '',
            createdBy: '',
            updatedBy: '',
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          const action = new campaignsActions.GetCampaignSuccess(payload);

          expect({ ...action }).toEqual({
            type: campaignsActions.GET_CAMPAIGN_SUCCESS,
            payload,
          });
        });
      });
      describe('Load Campaign data unsuccessfully', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const action = new campaignsActions.GetCampaignFail(payload);

          expect({ ...action }).toEqual({
            type: campaignsActions.GET_CAMPAIGN_FAIL,
            payload,
          });
        });
      });

      describe('Save Campaign data', () => {
        it('should create an action', () => {
          const campaignData = {
            id: '',
            clientId: '',
            brandId: '',
            startDate: new Date(),
            endDate: new Date(),
            budget: 0,
            name: '',
            marketId: '',
            currencyId: '',
            description: '',
            step: 0,
            adsShare: [20, 50, 30],
            active: true,
            impressionShareStrategy: '',
            createdBy: '',
            updatedBy: '',
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          const action = new campaignsActions.SaveCampaign(campaignData);

          expect({ ...action }).toEqual({
            type: campaignsActions.SAVE_CAMPAIGN,
            payload: campaignData,
          });
        });
      });
      describe('Save Campaign successfully', () => {
        it('should create an action', () => {
          const campaignData = {
            id: '',
            clientId: '',
            brandId: '',
            startDate: new Date(),
            endDate: new Date(),
            budget: 0,
            name: '',
            marketId: '',
            currencyId: '',
            description: '',
            step: 0,
            adsShare: [20, 50, 30],
            active: true,
            impressionShareStrategy: '',
            createdBy: '',
            updatedBy: '',
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          const action = new campaignsActions.SaveCampaignSuccess(campaignData);

          expect({ ...action }).toEqual({
            type: campaignsActions.SAVE_CAMPAIGN_SUCCESS,
            payload: campaignData,
          });
        });
      });
      describe('Save Campaign fail', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const action = new campaignsActions.SaveCampaignFail(payload);

          expect({ ...action }).toEqual({
            type: campaignsActions.SAVE_CAMPAIGN_FAIL,
            payload,
          });
        });
      });

      describe('Update Campaign data', () => {
        it('should create an action', () => {
          const campaignData = {
            id: '',
            clientId: '',
            brandId: '',
            startDate: new Date(),
            endDate: new Date(),
            budget: 0,
            name: '',
            marketId: '',
            currencyId: '',
            description: '',
            step: 0,
            adsShare: [20, 50, 30],
            active: true,
            impressionShareStrategy: '',
            createdBy: '',
            updatedBy: '',
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          const campaignId = '12';

          const action = new campaignsActions.UpdateCampaign({ campaignId, campaignData });

          expect({ ...action }).toEqual({
            type: campaignsActions.UPDATE_CAMPAIGN,
            payload: { campaignId, campaignData },
          });
        });
      });
      describe('Update Campaign successfully', () => {
        it('should create an action', () => {
          const campaignData = {
            id: '',
            clientId: '',
            brandId: '',
            startDate: new Date(),
            endDate: new Date(),
            budget: 0,
            name: '',
            marketId: '',
            currencyId: '',
            description: '',
            step: 0,
            adsShare: [20, 50, 30],
            active: true,
            impressionShareStrategy: '',
            createdBy: '',
            updatedBy: '',
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          const action = new campaignsActions.UpdateCampaignSuccess(campaignData);

          expect({ ...action }).toEqual({
            type: campaignsActions.UPDATE_CAMPAIGN_SUCCESS,
            payload: campaignData,
          });
        });
      });
      describe('Update Campaign fail', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const action = new campaignsActions.UpdateCampaignFail(payload);

          expect({ ...action }).toEqual({
            type: campaignsActions.UPDATE_CAMPAIGN_FAIL,
            payload,
          });
        });
      });
    });
  });
});
