import * as ClientsModel from './clients.model';
import * as ClientsActions from './clients.actions';
import { ClientsState } from './clients.model';
import { clientsReducer } from './clients.reducer';
import { HttpErrorResponse } from '@angular/common/http';

describe('Store', () => {
  describe('Clients', () => {
    describe('Reducer', () => {
      describe('undefined action', () => {
        it('should return the default state', () => {
          const { initialState } = ClientsModel;
          const action = {} as any;
          const state: ClientsState = clientsReducer(undefined, action);

          expect(state).toBe(initialState);
        });
      });

      describe('[Clients] Get All', () => {
        it('should set isLoading to true', () => {
          const { initialState } = ClientsModel;
          const action = new ClientsActions.GetClients();
          const state: ClientsState = clientsReducer(initialState, action);

          expect(state.isLoading).toEqual(true);
        });
        it('should set errorMessage to null', () => {
          const { initialState } = ClientsModel;

          const error = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const errorAction = new ClientsActions.GetClientsFail(error);
          let state: ClientsState = clientsReducer(initialState, errorAction);

          const loadAction = new ClientsActions.GetClients();
          state = clientsReducer(state, loadAction);

          expect(state.errorMessage).toEqual(null);
        });
        it('should set list to empty array', () => {
          const { initialState } = ClientsModel;

          const loadSuccessAction = new ClientsActions.GetClientsSuccess({
            rows: [{
              id: '',
              name: '',
              createdBy: '',
              updatedBy: '',
              createdAt: new Date(),
              updatedAt: new Date(),
            }],
            count: 1,
          });
          let state: ClientsState = clientsReducer(initialState, loadSuccessAction);

          const loadAction = new ClientsActions.GetClients();
          state = clientsReducer(state, loadAction);

          expect(state.list).toEqual([]);
        });
      });
      describe('[Clients] Get All Success', () => {
        it('should set isLoading to false', () => {
          const { initialState } = ClientsModel;

          const action = new ClientsActions.GetClientsSuccess({ rows: [], count: 0 });
          const state: ClientsState = clientsReducer(initialState, action);

          expect(state.isLoading).toEqual(false);
        });
        it('should set provided payload to "all"', () => {
          const { initialState } = ClientsModel;
          const action = new ClientsActions.GetClientsSuccess({ rows: [], count: 0 });
          const state: ClientsState = clientsReducer(initialState, action);

          expect(state.list).toEqual([]);
        });
      });
      describe('[Clients] Get All Fail', () => {
        it('should set isLoading to false', () => {
          const { initialState } = ClientsModel;
          const payload = new HttpErrorResponse({});
          const action = new ClientsActions.GetClientsFail(payload);
          const state: ClientsState = clientsReducer(initialState, action);

          expect(state.isLoading).toEqual(false);
        });
        it('should set error message', () => {
          const { initialState } = ClientsModel;
          const payload = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const action = new ClientsActions.GetClientsFail(payload);
          const state: ClientsState = clientsReducer(initialState, action);

          expect(state.errorMessage).toEqual('test 404 error');
        });
      });
    });
  });
});
