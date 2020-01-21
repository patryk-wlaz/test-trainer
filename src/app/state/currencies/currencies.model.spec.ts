import * as currenciesModel from './currencies.model';

describe('Store', () => {
  describe('Currencies', () => {
    describe('Model', () => {
      it('should export initial state', () => {
        expect(currenciesModel.initialState).not.toEqual(null);
      });
      it('should contain empty "list" array', () => {
        expect(currenciesModel.initialState.list).toEqual([]);
      });
      it('should contain false "isLoading" value', () => {
        expect(currenciesModel.initialState.isLoading).toEqual(false);
      });
      it('should contain "errorMessage" set to null', () => {
        expect(currenciesModel.initialState.errorMessage).toEqual(null);
      });
    });
  });
});
