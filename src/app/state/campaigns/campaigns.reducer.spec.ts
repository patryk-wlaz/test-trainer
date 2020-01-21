import * as campaignsModel from './campaigns.model';
import * as campaignsActions from './campaigns.actions';
import { CampaignsState } from './campaigns.model';
import { campaignsReducer } from './campaigns.reducer';
import { HttpErrorResponse } from '@angular/common/http';

const getCampaignSuccessPayload = {
  shouldClear: false,
  data: {
    rows: [{
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
    }],
    count: 1,
  },
};

describe('Store', () => {
  describe('Campaigns', () => {
    describe('Reducer', () => {
      describe('undefined action', () => {
        it('should return the default state', () => {
          const { initialState } = campaignsModel;
          const action = {} as any;
          const state: CampaignsState = campaignsReducer(undefined, action);

          expect(state).toBe(initialState);
        });
      });

      describe('[Campaigns] Get All', () => {
        let state: CampaignsState = campaignsModel.initialState;
        beforeAll(() => {
          const startAction = new campaignsActions.GetCampaigns();
          state = campaignsReducer(state, startAction);
        });

        it('should set isLoading to true', () => {
          expect(state.isLoading).toEqual(true);
        });
        it('should set errorMessage to null', () => {
          const error = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const errorAction = new campaignsActions.GetCampaignsFail(error);
          state = campaignsReducer(state, errorAction);

          const loadAction = new campaignsActions.GetCampaigns();
          state = campaignsReducer(state, loadAction);

          expect(state.errorMessage).toEqual(null);
        });
        it('should set list to empty array', () => {
          const loadSuccessAction = new campaignsActions.GetCampaignsSuccess({
            shouldClear: false,
            data: {
              rows: [{
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
              }],
              count: 1,
            },
          });
          state = campaignsReducer(state, loadSuccessAction);

          const loadAction = new campaignsActions.GetCampaigns();
          state = campaignsReducer(state, loadAction);

          expect(state.list).toEqual([]);
        });
      });
      describe('[Campaigns] Get All Success', () => {
        let state: CampaignsState = campaignsModel.initialState;
        beforeAll(() => {
          const startAction = new campaignsActions.GetCampaigns();
          state = campaignsReducer(state, startAction);
          const successAction = new campaignsActions.GetCampaignsSuccess(getCampaignSuccessPayload);
          state = campaignsReducer(state, successAction);
        });

        it('should set isLoading to false', () => {
          expect(state.isLoading).toEqual(false);
        });
        it('should set provided payload to "all"', () => {
          expect(state.list).toEqual(getCampaignSuccessPayload.data.rows);
        });
      });
      describe('[Campaigns] Get All Fail', () => {
        let state: CampaignsState = campaignsModel.initialState;
        beforeAll(() => {
          const startAction = new campaignsActions.GetCampaigns();
          state = campaignsReducer(state, startAction);
          const payload = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const failAction = new campaignsActions.GetCampaignsFail(payload);
          state = campaignsReducer(state, failAction);
        });

        it('should set isLoading to false', () => {
          expect(state.isLoading).toEqual(false);
        });
        it('should set error message', () => {
          expect(state.errorMessage).toEqual('test 404 error');
        });
      });
    });
  });
});
