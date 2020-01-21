import { Action } from '@ngrx/store';
import {
  CreateKeywordsDtoInterface,
  CreateKeywordsResDtoInterface,
  GetKeywordResDtoInterface,
  Keyword,
  UpdateKeywordDtoInterface,
  GetKeywordsResDtoInterface,
  BulkUpdateKeywordsDtoInterface,
  KeywordTypeToIndex,
  PickKeywordsFromSellerAppDtoInterface,
} from '@common';
import { HttpErrorResponse } from '@angular/common/http';

export const ADD_KEYWORDS = '[Keywords] Add keywords';
export const ADD_KEYWORDS_SUCCESS = '[Keywords] Add keywords success';
export const ADD_KEYWORDS_FAIL = '[Keywords] Add keywords fail';

export const GET_KEYWORDS = '[Keywords] Get keywords';
export const GET_KEYWORDS_SUCCESS = '[Keywords] Get keywords success';
export const GET_KEYWORDS_FAIL = '[Keywords] Get keywords fail';

export const UPDATE_KEYWORD = '[Keywords] Update keyword';
export const UPDATE_KEYWORD_SUCCESS = '[Keywords] Update keyword success';
export const UPDATE_KEYWORD_FAIL = '[Keywords] Update keyword fail';

export const UPDATE_KEYWORDS = '[Keywords] Update keywords';
export const UPDATE_KEYWORDS_SUCCESS = '[Keywords] Update keywords success';
export const UPDATE_KEYWORDS_FAIL = '[Keywords] Update keywords fail';

export const LOAD_API_KEYWORDS = '[Keywords] Load Api keyword';
export const LOAD_API_KEYWORDS_SUCCESS = '[Keywords] Load Api keywords success';

export const DELETE_KEYWORD = '[Keywords] Delete keyword';
export const DELETE_KEYWORD_SUCCESS = '[Keywords] Delete keyword success';
export const DELETE_KEYWORD_FAIL = '[Keywords] Delete keyword fail';

export const SET_CURRENT_TAB = '[Keywords] Set current tab';

export class AddKeywords implements Action {
  readonly type = ADD_KEYWORDS;

  constructor(readonly payload: CreateKeywordsDtoInterface) {}
}

export class AddKeywordsSuccess implements Action {
  readonly type = ADD_KEYWORDS_SUCCESS;

  constructor(readonly payload: CreateKeywordsResDtoInterface) {}
}

export class AddKeywordsFail implements Action {
  readonly type = ADD_KEYWORDS_FAIL;

  constructor(readonly payload: HttpErrorResponse) {}
}

export class GetKeywords implements Action {
  readonly type = GET_KEYWORDS;

  constructor(readonly payload: { calculateBudget: boolean }) { }
}

export class GetKeywordsSuccess implements Action {
  readonly type = GET_KEYWORDS_SUCCESS;

  constructor (readonly payload: GetKeywordsResDtoInterface) { }
}

export class GetKeywordsFail implements Action {
  readonly type = GET_KEYWORDS_FAIL;

  constructor(readonly payload: HttpErrorResponse) { }
}

export class UpdateKeyword implements Action {
  readonly type = UPDATE_KEYWORD;

  constructor(public readonly payload: { keywordData: UpdateKeywordDtoInterface; keywordId: Keyword['id'] }) { }
}

export class UpdateKeywordSuccess implements Action {
  readonly type = UPDATE_KEYWORD_SUCCESS;

  constructor(readonly payload: GetKeywordResDtoInterface) { }
}

export class UpdateKeywordFail implements Action {
  readonly type = UPDATE_KEYWORD_FAIL;

  constructor(readonly payload: HttpErrorResponse) { }
}

export class UpdateKeywords implements Action {
  readonly type = UPDATE_KEYWORDS;

  constructor(readonly payload: { keywordData: BulkUpdateKeywordsDtoInterface }) { }
}

export class UpdateKeywordsSuccess implements Action {
  readonly type = UPDATE_KEYWORDS_SUCCESS;

  constructor(readonly payload: GetKeywordResDtoInterface[]) { }
}

export class UpdateKeywordsFail implements Action {
  readonly type = UPDATE_KEYWORDS_FAIL;

  constructor(readonly payload: HttpErrorResponse) { }
}

export class DeleteKeyword implements Action {
  readonly type = DELETE_KEYWORD;

  constructor(readonly payload: Keyword['id']) { }
}

export class DeleteKeywordSuccess implements Action {
  readonly type = DELETE_KEYWORD_SUCCESS;

  constructor(readonly payload: Keyword['id']) { }
}

export class DeleteKeywordFail implements Action {
  readonly type = DELETE_KEYWORD_FAIL;

  constructor(readonly payload: HttpErrorResponse) { }
}

export class SetCurrentTab implements Action {
  readonly type = SET_CURRENT_TAB;

  constructor(readonly payload: { currentTab: KeywordTypeToIndex }) {}
}

export class LoadApiKeywords implements Action {
  readonly type = LOAD_API_KEYWORDS;

  constructor(readonly payload: PickKeywordsFromSellerAppDtoInterface) {}
}

export class LoadApiKeywordsSuccess implements Action {
  readonly type = LOAD_API_KEYWORDS_SUCCESS;

  constructor(readonly payload: CreateKeywordsResDtoInterface) {}
}

export type All =
  | AddKeywords
  | AddKeywordsSuccess
  | AddKeywordsFail

  | GetKeywords
  | GetKeywordsSuccess
  | GetKeywordsFail

  | UpdateKeyword
  | UpdateKeywordSuccess
  | UpdateKeywordFail

  | UpdateKeywords
  | UpdateKeywordsSuccess
  | UpdateKeywordsFail

  | DeleteKeyword
  | DeleteKeywordSuccess
  | DeleteKeywordFail

  | LoadApiKeywords
  | LoadApiKeywordsSuccess;
