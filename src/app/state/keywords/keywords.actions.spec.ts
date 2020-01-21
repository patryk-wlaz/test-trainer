import * as keywordsActions from './keywords.actions';

import { HttpErrorResponse } from '@angular/common/http';
import {
  KeywordTypes,
  CreateKeywordsDtoInterface,
  CreateKeywordsResDtoInterface,
  UpdateKeywordDtoInterface,
  GetKeywordResDtoInterface,
} from '@common';

const addKeywordsSuccessPayload: CreateKeywordsResDtoInterface = [
  {
    'id': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
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
  },
];

const updateKeywordsSuccessPayload: GetKeywordResDtoInterface = {
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

describe('Store', () => {
  describe('Keywords', () => {
    describe('Actions', () => {
      describe('Add Keywords data', () => {
        it('should create an action', () => {
          const payload: CreateKeywordsDtoInterface = {
            keywords: ['some keyword'],
            type: KeywordTypes.BRAND,
          };
          const action = new keywordsActions.AddKeywords(payload);

          expect({ ...action }).toEqual({
            type: keywordsActions.ADD_KEYWORDS,
            payload,
          });
        });
      });
      describe('Added Keywords data successfully', () => {
        it('should create an action', () => {
          const action = new keywordsActions.AddKeywordsSuccess(addKeywordsSuccessPayload);

          expect({ ...action }).toEqual({
            type: keywordsActions.ADD_KEYWORDS_SUCCESS,
            payload: addKeywordsSuccessPayload,
          });
        });
      });
      describe('Added Keywords data unsuccessfully', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({});
          const action = new keywordsActions.AddKeywordsFail(payload);

          expect({ ...action }).toEqual({
            type: keywordsActions.ADD_KEYWORDS_FAIL,
            payload,
          });
        });
      });

      describe('Update Keywords data', () => {
        it('should create an action', () => {
          const payload: UpdateKeywordDtoInterface = {
            name: 'some keyword',
            active: true,
            searchVolume: null,
            cpc: null,
            ctr: null,
            productIds: ['20', '30'],
          };
          const action = new keywordsActions.UpdateKeyword({
            keywordData: payload,
            keywordId: '20',
          });

          expect({ ...action }).toEqual({
            type: keywordsActions.UPDATE_KEYWORD,
            payload: {
              keywordData: payload,
              keywordId: '20',
            },
          });
        });
      });
      describe('Updated Keywords data successfully', () => {
        it('should create an action', () => {
          const action = new keywordsActions.UpdateKeywordSuccess(updateKeywordsSuccessPayload);

          expect({ ...action }).toEqual({
            type: keywordsActions.UPDATE_KEYWORD_SUCCESS,
            payload: updateKeywordsSuccessPayload,
          });
        });
      });
      describe('Added Keywords data unsuccessfully', () => {
        it('should create an action', () => {
          const payload = new HttpErrorResponse({});
          const action = new keywordsActions.UpdateKeywordFail(payload);

          expect({ ...action }).toEqual({
            type: keywordsActions.UPDATE_KEYWORD_FAIL,
            payload,
          });
        });
      });
    });
  });
});
