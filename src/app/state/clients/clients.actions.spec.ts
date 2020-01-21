import * as clientsActions from './clients.actions';

import { HttpErrorResponse } from '@angular/common/http';

describe('Store', () => {
  describe('Clients', () => {
    describe('Actions', () => {
      describe('Load Clients data', () => {
        it('should create an action', () => {
          const action = new clientsActions.GetClients();

          expect({ ...action }).toEqual({
            type: clientsActions.CLIENTS_GET_ALL,
            payload: undefined,
          });
        });
      });
      describe('Loaded Clients data successfully', () => {
        it('should create an action', () => {
          const action = new clientsActions.GetClientsSuccess({ rows: [], count: 0 });

          expect({ ...action }).toEqual({
            type: clientsActions.CLIENTS_GET_ALL_SUCCESS,
            payload: { rows: [], count: 0 },
          });
        });
      });
      describe('Loaded Clients data unsuccessfully', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({});
          const action = new clientsActions.GetClientsFail(payload);

          expect({ ...action }).toEqual({
            type: clientsActions.CLIENTS_GET_ALL_FAIL,
            payload,
          });
        });
      });
    });
  });
});
