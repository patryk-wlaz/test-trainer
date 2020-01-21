import * as marketsActions from './markets.actions';

import { HttpErrorResponse } from '@angular/common/http';

describe('Store', () => {
  describe('Markets', () => {
    describe('Actions', () => {
      describe('Load Markets data', () => {
        it('should create an action', () => {
          const action = new marketsActions.GetMarkets();

          expect({ ...action }).toEqual({
            type: marketsActions.MARKETS_GET_ALL,
            payload: undefined,
          });
        });
      });
      describe('Loaded Markets data successfully', () => {
        it('should create an action', () => {
          const action = new marketsActions.GetMarketsSuccess({ rows: [], count: 0 });

          expect({ ...action }).toEqual({
            type: marketsActions.MARKETS_GET_ALL_SUCCESS,
            payload: { rows: [], count: 0 },
          });
        });
      });
      describe('Loaded Markets data unsuccessfully', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({});
          const action = new marketsActions.GetMarketsFail(payload);

          expect({ ...action }).toEqual({
            type: marketsActions.MARKETS_GET_ALL_FAIL,
            payload,
          });
        });
      });
    });
  });
});
