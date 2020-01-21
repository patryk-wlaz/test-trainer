import * as keywordsModel from './keywords.model';

describe('Store', () => {
  describe('Keywords', () => {
    describe('Model', () => {
      it('should export initial state', () => {
        expect(keywordsModel.initialState).not.toEqual(null);
      });
      it('should contain empty "list" array', () => {
        expect(keywordsModel.initialState.list).toEqual([]);
      });
      it('should contain false "isLoading" value', () => {
        expect(keywordsModel.initialState.isLoading).toEqual(false);
      });
      it('should contain "errorMessage" set to null', () => {
        expect(keywordsModel.initialState.errorMessage).toEqual(null);
      });
    });
  });
});
