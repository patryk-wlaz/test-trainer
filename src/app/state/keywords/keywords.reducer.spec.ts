import * as KeywordsModel from './keywords.model';
import * as KeywordsActions from './keywords.actions';
import { KeywordsState } from './keywords.model';
import { keywordsReducer } from './keywords.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {
  KeywordTypes,
  CreateKeywordsDtoInterface,
  CreateKeywordsResDtoInterface,
  GetKeywordResDtoInterface,
  UpdateKeywordDtoInterface,
} from '@common';

const addKeywordsPayload: CreateKeywordsDtoInterface = {
  keywords: ['key 1', 'key 2', 'key 3'],
  type: KeywordTypes.BRAND,
};


const addKeywordsSuccessPayload: CreateKeywordsResDtoInterface = [
  {
    'id': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
    'name': 'key name',
    'type': KeywordTypes.BRAND as KeywordTypes,
    'active': false,
    'searchVolume': null,
    'cpc': null,
    'ctr': null,
    'campaignId': '9888dcb5-17d4-48b9-bbbf-6371ca0e99bd',
    'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
    'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
    'createdAt': new Date(),
    'updatedAt': new Date(),
  },
];

const updateKeywordSuccessPayload: GetKeywordResDtoInterface = {
  'id': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
  'products': [
    {
      'name': 'someProduct 1',
      'imageUrl': 'someUrl',
      'id': '20',
    },
    {
      'name': 'someProduct 2',
      'imageUrl': 'someUrl',
      'id': '30',
    },
  ],
  'name': 'some keyword',
  'type': KeywordTypes.BRAND,
  'active': true,
  'searchVolume': null,
  'cpc': null,
  'ctr': null,
  'campaignId': '9888dcb5-17d4-48b9-bbbf-6371ca0e99bd',
  'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
  'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
  'createdAt': new Date(),
  'updatedAt': new Date(),
};

const updateKeywordPayload: UpdateKeywordDtoInterface = {
  name: 'some keyword',
  active: true,
  searchVolume: null,
  cpc: null,
  ctr: null,
  productIds: ['20', '30'],
};

const secondLoadPayload: CreateKeywordsResDtoInterface = [
  {
    'id': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
    'name': 'key name',
    'type': KeywordTypes.BRAND,
    'active': false,
    'searchVolume': null,
    'cpc': null,
    'ctr': null,
    'campaignId': '9888dcb5-17d4-48b9-bbbf-6371ca0e99bd',
    'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
    'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
    'createdAt': new Date(),
    'updatedAt': new Date(),
  },
  {
    'id': 'c388a382-a69c-4827-bbac-93dfd681a1b4',
    'name': 'key name',
    'type': KeywordTypes.BRAND,
    'active': false,
    'searchVolume': null,
    'cpc': null,
    'ctr': null,
    'campaignId': '9888dcb5-17d4-48b9-bbbf-6371ca0e99bd',
    'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
    'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
    'createdAt': new Date(),
    'updatedAt': new Date(),
  },
  {
    'id': 'c388a382-a69c-4827-bbac-93dfd681a1b5',
    'name': 'key name',
    'type': KeywordTypes.BRAND,
    'active': false,
    'searchVolume': null,
    'cpc': null,
    'ctr': null,
    'campaignId': '9888dcb5-17d4-48b9-bbbf-6371ca0e99bd',
    'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
    'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
    'createdAt': new Date(),
    'updatedAt': new Date(),
  },
];

describe('Store', () => {
  describe('Keywords', () => {
    describe('Reducer', () => {
      describe('undefined action', () => {
        it('should return the default state', () => {
          const { initialState } = KeywordsModel;
          const action = {} as any;
          const state: KeywordsState = keywordsReducer(undefined, action);

          expect(state).toBe(initialState);
        });
      });

      describe('[Keywords] Add keywords', () => {
        let state = KeywordsModel.initialState;
        beforeAll(() => {
          const addKeywordsSuccess = new KeywordsActions.AddKeywordsSuccess(addKeywordsSuccessPayload);
          state = keywordsReducer(state, addKeywordsSuccess);

          const action = new KeywordsActions.AddKeywords(addKeywordsPayload);
          state = keywordsReducer(state, action);
        });

        it('should set isLoading to true', () => {
          expect(state.isLoading).toEqual(true);
        });
        it('should set errorMessage to null', () => {
          const error = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const errorAction = new KeywordsActions.AddKeywordsFail(error);
          state = keywordsReducer(state, errorAction);

          const loadAction = new KeywordsActions.AddKeywords(addKeywordsPayload);
          state = keywordsReducer(state, loadAction);

          expect(state.errorMessage).toEqual(null);
        });
        it('shouldn\'t touch list', () => {
          expect(state.list).toEqual(addKeywordsSuccessPayload);
        });
      });
      describe('[Keywords] Add keywords Success', () => {
        let state = KeywordsModel.initialState;
        beforeAll(() => {
          const action = new KeywordsActions.AddKeywords(addKeywordsPayload);
          state = keywordsReducer(state, action);

          const addKeywordsSuccess = new KeywordsActions.AddKeywordsSuccess(addKeywordsSuccessPayload);
          state = keywordsReducer(state, addKeywordsSuccess);
        });

        it('should set isLoading to false', () => {
          expect(state.isLoading).toEqual(false);
        });
        it('should attach provided payload to "all"', () => {
          const secondLoad = new KeywordsActions.AddKeywordsSuccess(secondLoadPayload);
          state = keywordsReducer(state, secondLoad);

          expect(state.list).toEqual([...secondLoadPayload, ...addKeywordsSuccessPayload]);
        });
      });
      describe('[Keywords] Add keywords Fail', () => {
        let state = KeywordsModel.initialState;
        beforeAll(() => {
          const addKeywords = new KeywordsActions.AddKeywords(addKeywordsPayload);
          state = keywordsReducer(state, addKeywords);

          const addKeywordsSuccess = new KeywordsActions.AddKeywordsSuccess(addKeywordsSuccessPayload);
          state = keywordsReducer(state, addKeywordsSuccess);

          const action = new KeywordsActions.AddKeywords(addKeywordsPayload);
          state = keywordsReducer(state, action);

          const payload = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found',
          });
          const failAction = new KeywordsActions.AddKeywordsFail(payload);
          state = keywordsReducer(state, failAction);
        });

        it('should set isLoading to false', () => {
          expect(state.isLoading).toEqual(false);
        });
        it('should set error message', () => {
          expect(state.errorMessage).toEqual('test 404 error');
        });
        it('shouldn\'t touch list', () => {
          expect(state.list).toEqual(addKeywordsSuccessPayload);
        });
      });
    });
    describe('[Keywords] Update keywords', () => {
      let state = KeywordsModel.initialState;
      beforeAll(() => {
        const addKeywordsSuccess = new KeywordsActions.AddKeywordsSuccess(addKeywordsSuccessPayload);
        state = keywordsReducer(state, addKeywordsSuccess);

        const action = new KeywordsActions.UpdateKeyword({
            keywordData: updateKeywordPayload,
            keywordId: 'c388a382-a69c-4827-bbac-93dfd681a1b3',
          }
        );
        state = keywordsReducer(state, action);
      });

      it('should set isLoading to true', () => {
        expect(state.isLoading).toEqual(true);
      });
      it('should set errorMessage to null', () => {
        const error = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404, statusText: 'Not Found',
        });
        const errorAction = new KeywordsActions.UpdateKeywordFail(error);
        state = keywordsReducer(state, errorAction);

        const loadAction = new KeywordsActions.UpdateKeyword({
          keywordData: updateKeywordPayload,
          keywordId: 'c388a382-a69c-4827-bbac-93dfd681a1b3',
        });
        state = keywordsReducer(state, loadAction);

        expect(state.errorMessage).toEqual(null);
      });
    });
    describe('[Keywords] Update keywords Success', () => {
      let state = KeywordsModel.initialState;
      beforeAll(() => {
        const addKeywordsSuccess = new KeywordsActions.AddKeywordsSuccess(addKeywordsSuccessPayload);
        state = keywordsReducer(state, addKeywordsSuccess);

        const action = new KeywordsActions.UpdateKeyword({
          keywordData: updateKeywordPayload,
          keywordId: 'c388a382-a69c-4827-bbac-93dfd681a1b3',
        });
        state = keywordsReducer(state, action);

        const updateKeywordsSuccess = new KeywordsActions.UpdateKeywordSuccess(updateKeywordSuccessPayload);
        state = keywordsReducer(state, updateKeywordsSuccess);
      });

      it('should set isLoading to false', () => {
        expect(state.isLoading).toEqual(false);
      });
      it('should change provided keyword from payload', () => {
        const keywordFromState = state.list.find((keyword) => keyword.id === updateKeywordSuccessPayload['id']);
        expect(keywordFromState).toEqual(updateKeywordSuccessPayload);
      });
    });
    describe('[Keywords] Update keywords Fail', () => {
      let state = KeywordsModel.initialState;
      beforeAll(() => {
        const addKeywordsSuccess = new KeywordsActions.AddKeywordsSuccess(addKeywordsSuccessPayload);
        state = keywordsReducer(state, addKeywordsSuccess);

        const action = new KeywordsActions.UpdateKeyword({
          keywordData: updateKeywordPayload,
          keywordId: 'c388a382-a69c-4827-bbac-93dfd681a1b3',
        });
        state = keywordsReducer(state, action);

        const payload = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404, statusText: 'Not Found',
        });
        const failAction = new KeywordsActions.UpdateKeywordFail(payload);
        state = keywordsReducer(state, failAction);
      });

      it('should set isLoading to false', () => {
        expect(state.isLoading).toEqual(false);
      });
      it('should set error message', () => {
        expect(state.errorMessage).toEqual('test 404 error');
      });
      it('shouldn\'t touch list', () => {
        expect(state.list).toEqual(addKeywordsSuccessPayload);
      });
    });
  });
});
