import * as campaignModel from './campaign.model';
import * as campaignActions from './campaign.actions';
import { CampaignState } from './campaign.model';
import { campaignReducer } from './campaign.reducer';
import { HttpErrorResponse } from '@angular/common/http';

describe('Store', () => {
  describe('Campaigns', () => {
    describe('Reducer', () => {
      describe('undefined action', () => {
        it('should return the default state', () => {
          const { initialState } = campaignModel;
          const action = {} as any;
          const state: CampaignState = campaignReducer(undefined, action);

          expect(state).toBe(initialState);
        });
      });
    });
    describe('[Campaign] Get', () => {
      it('should set isLoading to true', () => {
        const { initialState } = campaignModel;
        const action = new campaignActions.GetCampaign();
        const state: CampaignState = campaignReducer(initialState, action);

        expect(state.isLoading).toEqual(true);
      });
      it('should set errorMessage to null', () => {
        const { initialState } = campaignModel;

        const error = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404, statusText: 'Not Found',
        });
        const errorAction = new campaignActions.GetCampaignFail(error);
        let state: CampaignState = campaignReducer(initialState, errorAction);

        const loadAction = new campaignActions.GetCampaign();
        state = campaignReducer(state, loadAction);

        expect(state.errorMessage).toEqual(null);
      });
      it('should remove previous campaign', () => {
        const { initialState } = campaignModel;

        const loadSuccessAction = new campaignActions.GetCampaignSuccess({
          id: '',
          clientId: '',
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
        });
        let state: CampaignState = campaignReducer(initialState, loadSuccessAction);

        const loadAction = new campaignActions.GetCampaign();
        state = campaignReducer(state, loadAction);

        expect(state.campaign).toEqual(null);
      });
    });
    describe('[Campaign] Get Success', () => {
      it('should set isLoading to false', () => {
        const { initialState } = campaignModel;

        const getAction = new campaignActions.GetCampaign();
        let state: CampaignState = campaignReducer(initialState, getAction);

        const action = new campaignActions.GetCampaignSuccess({
          id: '',
          clientId: '',
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
        });
        state = campaignReducer(state, action);

        expect(state.isLoading).toEqual(false);
      });
      it('should set provided payload to "campaign"', () => {
        const { initialState } = campaignModel;

        const getAction = new campaignActions.GetCampaign();
        let state: CampaignState = campaignReducer(initialState, getAction);

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
        const action = new campaignActions.GetCampaignSuccess(payload);
        state = campaignReducer(state, action);

        expect(state.campaign).toEqual(payload);
      });
    });
    describe('[Campaign] Get Fail', () => {
      it('should set isLoading to false', () => {
        const { initialState } = campaignModel;
        const getAction = new campaignActions.GetCampaign();
        let state: CampaignState = campaignReducer(initialState, getAction);

        const payload = new HttpErrorResponse({});
        const action = new campaignActions.GetCampaignFail(payload);
        state = campaignReducer(state, action);

        expect(state.isLoading).toEqual(false);
      });
      it('should set error message', () => {
        const { initialState } = campaignModel;
        const getAction = new campaignActions.GetCampaign();
        let state: CampaignState = campaignReducer(initialState, getAction);

        const payload = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404, statusText: 'Not Found',
        });
        const action = new campaignActions.GetCampaignFail(payload);
        state = campaignReducer(state, action);

        expect(state.errorMessage).toEqual('test 404 error');
      });
    });

    describe('[Campaign] Save Campaign', () => {
      it('should set isLoading to true', () => {
        const { initialState } = campaignModel;

        const action = new campaignActions.SaveCampaign({
          clientId: '',
          startDate: new Date(),
          endDate: new Date(),
          name: '',
          marketId: '',
          currencyId: '',
          description: '',
          adsShare: [20, 50, 30],
          active: true,
          impressionShareStrategy: '',
        });
        const state: CampaignState = campaignReducer(initialState, action);

        expect(state.isLoading).toEqual(true);
      });
    });
    describe('[Campaign] Save Campaign Success', () => {
      it('should set isLoading to false', () => {
        const { initialState } = campaignModel;
        const payload = {
          id: '',
          clientId: '',
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
        const saveAction = new campaignActions.SaveCampaign(payload);
        let state: CampaignState = campaignReducer(initialState, saveAction);

        const action = new campaignActions.SaveCampaignSuccess(payload);
        state = campaignReducer(state, action);

        expect(state.isLoading).toEqual(false);
      });
      it('should set errorMessage to null', () => {
        const { initialState } = campaignModel;
        const payload = {
          id: '',
          clientId: '',
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
        };
        const saveAction = new campaignActions.SaveCampaign(payload);
        let state: CampaignState = campaignReducer(initialState, saveAction);

        const action = new campaignActions.SaveCampaignSuccess({
          ...payload,
          createdBy: '',
          updatedBy: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        state = campaignReducer(state, action);

        expect(state.errorMessage).toEqual(null);
      });
      it('should set save response to campaign', () => {
        const { initialState } = campaignModel;
        const payload = {
          id: '',
          clientId: '',
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
        };
        const saveAction = new campaignActions.SaveCampaign(payload);
        let state: CampaignState = campaignReducer(initialState, saveAction);

        const saveResponse = {
          ...payload,
          createdBy: '',
          updatedBy: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        const action = new campaignActions.SaveCampaignSuccess(saveResponse);
        state = campaignReducer(state, action);

        expect(state.campaign).toEqual(saveResponse);
      });
    });
    describe('[Campaign] Save Campaign Fail', () => {
      it('should set isLoading to false', () => {
        const { initialState } = campaignModel;
        const campaign = {
          id: '',
          clientId: '',
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
        };
        const saveAction = new campaignActions.SaveCampaign(campaign);
        let state: CampaignState = campaignReducer(initialState, saveAction);

        const payload = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404, statusText: 'Not Found',
        });
        const action = new campaignActions.SaveCampaignFail(payload);
        state = campaignReducer(state, action);

        expect(state.isLoading).toEqual(false);
      });
      it('should set errorMessage', () => {
        const { initialState } = campaignModel;
        const campaign = {
          id: '',
          clientId: '',
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
        };
        const saveAction = new campaignActions.SaveCampaign(campaign);
        let state: CampaignState = campaignReducer(initialState, saveAction);

        const payload = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404, statusText: 'Not Found',
        });
        const action = new campaignActions.SaveCampaignFail(payload);
        state = campaignReducer(state, action);

        expect(state.errorMessage).toEqual('test 404 error');
      });
    });

    describe('[Campaign] Update Campaign', () => {
      it('should set isLoading to true', () => {
        const { initialState } = campaignModel;
        const campaignData = {
          id: '',
          clientId: '',
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

        const action = new campaignActions.UpdateCampaign({ campaignId: '12', campaignData });
        const state: CampaignState = campaignReducer(initialState, action);

        expect(state.isLoading).toEqual(true);
      });
    });
    describe('[Campaign] Update Campaign Success', () => {
      it('should set isLoading to false', () => {
        const { initialState } = campaignModel;
        const campaignData = {
          id: '',
          clientId: '',
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
        const updateAction = new campaignActions.UpdateCampaign({ campaignId: '12', campaignData });
        let state: CampaignState = campaignReducer(initialState, updateAction);

        const action = new campaignActions.UpdateCampaignSuccess(campaignData);
        state = campaignReducer(state, action);

        expect(state.isLoading).toEqual(false);
      });
      it('should set errorMessage to null', () => {
        const { initialState } = campaignModel;
        const campaignData = {
          id: '',
          clientId: '',
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
        const updateAction = new campaignActions.UpdateCampaign({ campaignId: '12', campaignData });
        let state: CampaignState = campaignReducer(initialState, updateAction);

        const action = new campaignActions.UpdateCampaignSuccess(campaignData);
        state = campaignReducer(state, action);

        expect(state.errorMessage).toEqual(null);
      });
      it('should set update response to campaign', () => {
        const { initialState } = campaignModel;
        const campaignData = {
          id: '',
          clientId: '',
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
        const updateAction = new campaignActions.UpdateCampaign({ campaignId: '12', campaignData });
        let state: CampaignState = campaignReducer(initialState, updateAction);

        const action = new campaignActions.UpdateCampaignSuccess(campaignData);
        state = campaignReducer(state, action);

        expect(state.campaign).toEqual(campaignData);
      });
    });
    describe('[Campaign] Update Campaign Fail', () => {
      it('should set isLoading to false', () => {
        const { initialState } = campaignModel;
        const campaignData = {
          id: '',
          clientId: '',
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
        const updateAction = new campaignActions.UpdateCampaign({ campaignId: '12', campaignData });
        let state: CampaignState = campaignReducer(initialState, updateAction);

        const payload = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404, statusText: 'Not Found',
        });
        const action = new campaignActions.UpdateCampaignFail(payload);
        state = campaignReducer(state, action);

        expect(state.isLoading).toEqual(false);
      });
      it('should set errorMessage', () => {
        const { initialState } = campaignModel;
        const campaignData = {
          id: '',
          clientId: '',
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
        const updateAction = new campaignActions.UpdateCampaign({ campaignId: '12', campaignData });
        let state: CampaignState = campaignReducer(initialState, updateAction);

        const payload = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404, statusText: 'Not Found',
        });
        const action = new campaignActions.UpdateCampaignFail(payload);
        state = campaignReducer(state, action);

        expect(state.errorMessage).toEqual('test 404 error');
      });
    });
  });
});
