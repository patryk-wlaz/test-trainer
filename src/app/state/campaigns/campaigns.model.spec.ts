import * as campaignsModel from './campaigns.model';
import { CAMPAIGNS_PER_REQUEST } from './campaigns.model';

describe('Store', () => {
  describe('Campaigns', () => {
    describe('Model', () => {
      it('should export initial state', () => {
        expect(campaignsModel.initialState).not.toEqual(null);
      });
      it('should contain empty "list" array', () => {
        expect(campaignsModel.initialState.list).toEqual([]);
      });
      it('should contain false "isLoading" value', () => {
        expect(campaignsModel.initialState.isLoading).toEqual(false);
      });
      it('should contain "errorMessage" set to null', () => {
        expect(campaignsModel.initialState.errorMessage).toEqual(null);
      });
      it('should contain "getCampaignsParams"', () => {
        expect(campaignsModel.initialState.getCampaignsParams).toBeTruthy();
      });
      it('should contain "getCampaignsParams" search and status set to null', () => {
        expect(campaignsModel.initialState.getCampaignsParams.search).toBeNull();
        expect(campaignsModel.initialState.getCampaignsParams.status).toBeNull();
      });
      it('should contain "getCampaignsParams" offset set to 0', () => {
        expect(campaignsModel.initialState.getCampaignsParams.offset).toEqual(0);
      });
      it('should contain "getCampaignsParams" limit set to const CAMPAIGNS_PER_REQUEST', () => {
        expect(campaignsModel.initialState.getCampaignsParams.limit).toEqual(CAMPAIGNS_PER_REQUEST);
      });
    });
  });
});
