import * as campaignsModel from './campaign.model';

describe('Store', () => {
  describe('Campaigns', () => {
    describe('Model', () => {
      it('should export initial state', () => {
        expect(campaignsModel.initialState).not.toEqual(null);
      });
      it('should contain campaign set to null', () => {
        expect(campaignsModel.initialState.campaign).toEqual(null);
      });
      it('should contain isLoading set to false', () => {
        expect(campaignsModel.initialState.isLoading).toEqual(false);
      });
      it('should contain errorMessage set to null', () => {
        expect(campaignsModel.initialState.errorMessage).toEqual(null);
      });

    });
  });
});
