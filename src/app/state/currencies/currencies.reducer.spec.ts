import * as CurrenciesModel from './currencies.model';
import * as CurrenciesActions from './currencies.actions';
import { CurrenciesState } from './currencies.model';
import { currenciesReducer } from './currencies.reducer';
import { HttpErrorResponse } from '@angular/common/http';

describe('Store', () => {
  describe('Currencies', () => {
    describe('Reducer', () => {
      describe('undefined action', () => {
        it('should return the default state', () => {
          const { initialState } = CurrenciesModel;
          const action = {} as any;
          const state: CurrenciesState = currenciesReducer(undefined, action);

          expect(state).toBe(initialState);
        });
      });

      describe('[Currencies] Get All', () => {
        it('should set isLoading to true', () => {
          const { initialState } = CurrenciesModel;
          const action = new CurrenciesActions.GetCurrencies();
          const state: CurrenciesState = currenciesReducer(initialState, action);

          expect(state.isLoading).toEqual(true);
        });
        it('should set errorMessage to null', () => {
          const { initialState } = CurrenciesModel;

          const error = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const errorAction = new CurrenciesActions.GetCurrenciesFail(error);
          let state: CurrenciesState = currenciesReducer(initialState, errorAction);

          const loadAction = new CurrenciesActions.GetCurrencies();
          state = currenciesReducer(state, loadAction);

          expect(state.errorMessage).toEqual(null);
        });
        it('should set list to empty array', () => {
          const { initialState } = CurrenciesModel;

          const loadSuccessAction = new CurrenciesActions.GetCurrenciesSuccess({
            rows: [{
              id: '',
              name: '',
              symbol: '',
              acronym: '',
              createdBy: '',
              updatedBy: '',
              createdAt: new Date(),
              updatedAt: new Date(),
            }],
            count: 1,
          });
          let state: CurrenciesState = currenciesReducer(initialState, loadSuccessAction);

          const loadAction = new CurrenciesActions.GetCurrencies();
          state = currenciesReducer(state, loadAction);

          expect(state.list).toEqual([]);
        });
      });
      describe('[Currencies] Get All Success', () => {
        it('should set isLoading to false', () => {
          const { initialState } = CurrenciesModel;

          const action = new CurrenciesActions.GetCurrenciesSuccess({ rows: [], count: 0 });
          const state: CurrenciesState = currenciesReducer(initialState, action);

          expect(state.isLoading).toEqual(false);
        });
        it('should set provided payload to "all"', () => {
          const { initialState } = CurrenciesModel;
          const action = new CurrenciesActions.GetCurrenciesSuccess({ rows: [], count: 0 });
          const state: CurrenciesState = currenciesReducer(initialState, action);

          expect(state.list).toEqual([]);
        });
      });
      describe('[Currencies] Get All Fail', () => {
        it('should set isLoading to false', () => {
          const { initialState } = CurrenciesModel;
          const payload = new HttpErrorResponse({});
          const action = new CurrenciesActions.GetCurrenciesFail(payload);
          const state: CurrenciesState = currenciesReducer(initialState, action);

          expect(state.isLoading).toEqual(false);
        });
        it('should set error message', () => {
          const { initialState } = CurrenciesModel;
          const payload = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const action = new CurrenciesActions.GetCurrenciesFail(payload);
          const state: CurrenciesState = currenciesReducer(initialState, action);

          expect(state.errorMessage).toEqual('test 404 error');
        });
      });
    });
  });
});
