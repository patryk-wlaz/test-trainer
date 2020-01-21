import * as marketsModel from './markets.model';

describe('Store', () => {
  describe('Markets', () => {
    describe('Model', () => {
      it('should export initial state', () => {
        expect(marketsModel.initialState).not.toEqual(null);
      });
      it('should contain empty "list" array', () => {
        expect(marketsModel.initialState.list).toEqual([]);
      });
      it('should contain false "isLoading" value', () => {
        expect(marketsModel.initialState.isLoading).toEqual(false);
      });
      it('should contain "errorMessage" set to null', () => {
        expect(marketsModel.initialState.errorMessage).toEqual(null);
      });
    });
  });
});
