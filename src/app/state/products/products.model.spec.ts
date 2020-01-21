import * as productsModel from './products.model';

describe('Store', () => {
  describe('Products', () => {
    describe('Model', () => {
      it('should export initial state', () => {
        expect(productsModel.initialState).not.toEqual(null);
      });
      it('should contain empty "list" array', () => {
        expect(productsModel.initialState.list).toEqual([]);
      });
      it('should contain false "isLoading" value', () => {
        expect(productsModel.initialState.isLoading).toEqual(false);
      });
      it('should contain "errorMessage" set to null', () => {
        expect(productsModel.initialState.errorMessage).toEqual(null);
      });
    });
  });
});
