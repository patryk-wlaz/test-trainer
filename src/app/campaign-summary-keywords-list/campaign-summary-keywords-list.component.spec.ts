import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSummaryKeywordsListComponent } from './campaign-summary-keywords-list.component';
import { CoreModule } from 'app/core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { effects, metaReducers, reducers } from 'app/state';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { GetKeywordResDtoInterface, KeywordTypes, ProductTypes } from '@common/index';
import { provideMockStore } from '@ngrx/store/testing';

const sampleKeyword: GetKeywordResDtoInterface = {
  'id': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
  'products': [
    {
      'id': 'c1ef9796-4d0b-4045-8619-c406e2081c3a',
      'name': 'some product name',
      'asin': 'ASIN12222456',
      'retailHealth': 10,
      'imageUrl': null,
      'type': 'BRAND' as ProductTypes,
      'priority': true,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'KeywordsProductsEntity': {
        'id': '12345',
        'keywordId': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
        'productId': 'c1ef9796-4d0b-4045-8619-c406e2081c3a',
        'createdAt': new Date(),
        'updatedAt': new Date(),
      },
    },
    {
      'id': '71b2d420-6389-4a54-89bc-52f770e66a45',
      'name': 'product',
      'asin': 'ASIN12222451',
      'retailHealth': 4,
      'imageUrl': null,
      'type': 'BRAND' as ProductTypes,
      'priority': false,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'KeywordsProductsEntity': {
        'id': '12345',
        'keywordId': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
        'productId': 'c1ef9796-4d0b-4045-8619-c406e2081c3a',
        'createdAt': new Date(),
        'updatedAt': new Date(),
      },
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
const sampleKeyword2: GetKeywordResDtoInterface = {
  'id': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
  'products': [
    {
      'id': 'c1ef9796-4d0b-4045-8619-c406e2081c3a',
      'name': 'some product name',
      'asin': 'ASIN12222456',
      'retailHealth': 4,
      'imageUrl': null,
      'type': 'BRAND' as ProductTypes,
      'priority': true,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'KeywordsProductsEntity': {
        'id': '12345',
        'keywordId': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
        'productId': 'c1ef9796-4d0b-4045-8619-c406e2081c3a',
        'createdAt': new Date(),
        'updatedAt': new Date(),
      },
    },
    {
      'id': '71b2d420-6389-4a54-89bc-52f770e66a45',
      'name': 'product',
      'asin': 'ASIN12222451',
      'retailHealth': 1,
      'imageUrl': null,
      'type': 'BRAND' as ProductTypes,
      'priority': false,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'KeywordsProductsEntity': {
        'id': '12345',
        'keywordId': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
        'productId': 'c1ef9796-4d0b-4045-8619-c406e2081c3a',
        'createdAt': new Date(),
        'updatedAt': new Date(),
      },
    },
    {
      'id': '71b2d420-6389-4a54-89bc-52f770e66a45',
      'name': 'product',
      'asin': 'ASIN12222451',
      'retailHealth': 6,
      'imageUrl': null,
      'type': 'BRAND' as ProductTypes,
      'priority': false,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'KeywordsProductsEntity': {
        'id': '12345',
        'keywordId': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
        'productId': 'c1ef9796-4d0b-4045-8619-c406e2081c3a',
        'createdAt': new Date(),
        'updatedAt': new Date(),
      },
    },
    {
      'id': '71b2d420-6389-4a54-89bc-52f770e66a45',
      'name': 'product',
      'asin': 'ASIN12222451',
      'retailHealth': 1,
      'imageUrl': null,
      'type': 'BRAND' as ProductTypes,
      'priority': false,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'KeywordsProductsEntity': {
        'id': '12345',
        'keywordId': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
        'productId': 'c1ef9796-4d0b-4045-8619-c406e2081c3a',
        'createdAt': new Date(),
        'updatedAt': new Date(),
      },
    },
    {
      'id': '71b2d420-6389-4a54-89bc-52f770e66a45',
      'name': 'product',
      'asin': 'ASIN12222451',
      'retailHealth': 7,
      'imageUrl': null,
      'type': 'BRAND' as ProductTypes,
      'priority': false,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'KeywordsProductsEntity': {
        'id': '12345',
        'keywordId': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
        'productId': 'c1ef9796-4d0b-4045-8619-c406e2081c3a',
        'createdAt': new Date(),
        'updatedAt': new Date(),
      },
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
const sampleKeyword3: GetKeywordResDtoInterface = {
  'id': 'c388a382-a69c-4827-bbac-93dfd681a1b3',
  'products': [],
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

describe('Components', () => {
  describe('CampaignKeywordsListComponent', () => {
    let component: CampaignSummaryKeywordsListComponent;
    let fixture: ComponentFixture<CampaignSummaryKeywordsListComponent>;
    const initialState = {
      campaign: {
        campaign: {
          id: '1234',
        },
      },
      products: {
        list: [],
      },
    };

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CoreModule,
          SharedModule,
          RouterTestingModule,
          EffectsModule.forRoot(effects),
          StoreModule.forRoot(reducers as any, { metaReducers }),
          NoopAnimationsModule,
        ],
        declarations: [CampaignSummaryKeywordsListComponent],
        providers: [
          provideMockStore({ initialState }),
          {
            provide: ActivatedRoute,
            useValue: {
              params: of({ id: 123 }),
              parent: { paramMap: of({ campaignId: 123 }) },
            },
          },
        ],
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CampaignSummaryKeywordsListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
