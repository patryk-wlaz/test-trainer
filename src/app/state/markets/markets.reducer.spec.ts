import * as MarketsModel from './markets.model';
import * as MarketsActions from './markets.actions';
import { MarketsState } from './markets.model';
import { marketsReducer } from './markets.reducer';
import { HttpErrorResponse } from '@angular/common/http';

describe('Store', () => {
  describe('Markets', () => {
    describe('Reducer', () => {
      describe('undefined action', () => {
        it('should return the default state', () => {
          const { initialState } = MarketsModel;
          const action = {} as any;
          const state: MarketsState = marketsReducer(undefined, action);

          expect(state).toBe(initialState);
        });
      });

      describe('[Markets] Get All', () => {
        it('should set isLoading to true', () => {
          const { initialState } = MarketsModel;
          const action = new MarketsActions.GetMarkets();
          const state: MarketsState = marketsReducer(initialState, action);

          expect(state.isLoading).toEqual(true);
        });
        it('should set errorMessage to null', () => {
          const { initialState } = MarketsModel;

          const error = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const errorAction = new MarketsActions.GetMarketsFail(error);
          let state: MarketsState = marketsReducer(initialState, errorAction);

          const loadAction = new MarketsActions.GetMarkets();
          state = marketsReducer(state, loadAction);

          expect(state.errorMessage).toEqual(null);
        });
        it('should set list to empty array', () => {
          const { initialState } = MarketsModel;

          const loadSuccessAction = new MarketsActions.GetMarketsSuccess({
            rows: [{
              id: '',
              name: '',
              flagUrl: '',
              defaultCurrencyId: '',
              createdBy: '',
              updatedBy: '',
              createdAt: new Date(),
              updatedAt: new Date(),
            }],
            count: 1,
          });
          let state: MarketsState = marketsReducer(initialState, loadSuccessAction);

          const loadAction = new MarketsActions.GetMarkets();
          state = marketsReducer(state, loadAction);

          expect(state.list).toEqual([]);
        });
      });
      describe('[Markets] Get All Success', () => {
        it('should set isLoading to false', () => {
          const { initialState } = MarketsModel;

          const action = new MarketsActions.GetMarketsSuccess({ rows: [], count: 0 });
          const state: MarketsState = marketsReducer(initialState, action);

          expect(state.isLoading).toEqual(false);
        });
        it('should set provided payload to "all"', () => {
          const { initialState } = MarketsModel;
          const action = new MarketsActions.GetMarketsSuccess({ rows: [], count: 0 });
          const state: MarketsState = marketsReducer(initialState, action);

          expect(state.list).toEqual([]);
        });
      });
      describe('[Markets] Get All Fail', () => {
        it('should set isLoading to false', () => {
          const { initialState } = MarketsModel;
          const payload = new HttpErrorResponse({});
          const action = new MarketsActions.GetMarketsFail(payload);
          const state: MarketsState = marketsReducer(initialState, action);

          expect(state.isLoading).toEqual(false);
        });
        it('should set error message', () => {
          const { initialState } = MarketsModel;
          const payload = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const action = new MarketsActions.GetMarketsFail(payload);
          const state: MarketsState = marketsReducer(initialState, action);

          expect(state.errorMessage).toEqual('test 404 error');
        });
      });
    });
  });
});
