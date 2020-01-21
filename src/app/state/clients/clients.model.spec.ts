import * as clientsModel from './clients.model';

describe('Store', () => {
  describe('Clients', () => {
    describe('Model', () => {
      it('should export initial state', () => {
        expect(clientsModel.initialState).not.toEqual(null);
      });
      it('should contain empty "list" array', () => {
        expect(clientsModel.initialState.list).toEqual([]);
      });
      it('should contain false "isLoading" value', () => {
        expect(clientsModel.initialState.isLoading).toEqual(false);
      });
      it('should contain "errorMessage" set to null', () => {
        expect(clientsModel.initialState.errorMessage).toEqual(null);
      });
    });
  });
});
