import * as currenciesActions from './currencies.actions';

import { HttpErrorResponse } from '@angular/common/http';

describe('Store', () => {
  describe('Currencies', () => {
    describe('Actions', () => {
      describe('Load Currencies data', () => {
        it('should create an action', () => {
          const action = new currenciesActions.GetCurrencies();

          expect({ ...action }).toEqual({
            type: currenciesActions.CURRENCIES_GET_ALL,
            payload: undefined,
          });
        });
      });
      describe('Loaded Currencies data successfully', () => {
        it('should create an action', () => {
          const action = new currenciesActions.GetCurrenciesSuccess({ rows: [], count: 0 });

          expect({ ...action }).toEqual({
            type: currenciesActions.CURRENCIES_GET_ALL_SUCCESS,
            payload: { rows: [], count: 0 },
          });
        });
      });
      describe('Loaded Currencies data unsuccessfully', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({});
          const action = new currenciesActions.GetCurrenciesFail(payload);

          expect({ ...action }).toEqual({
            type: currenciesActions.CURRENCIES_GET_ALL_FAIL,
            payload,
          });
        });
      });
    });
  });
});
