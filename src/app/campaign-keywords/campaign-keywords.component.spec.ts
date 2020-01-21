import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignKeywordsComponent } from './campaign-keywords.component';
import { CoreModule } from 'app/core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'app/shared/shared.module';
import { CampaignKeywordsListComponent } from 'app/campaign-keywords-list/campaign-keywords-list.component';
import { EffectsModule } from '@ngrx/effects';
import { effects, metaReducers, reducers } from 'app/state';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('Components', () => {
  describe('CampaignKeywordsComponent', () => {
    let component: CampaignKeywordsComponent;
    let fixture: ComponentFixture<CampaignKeywordsComponent>;
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
          NoopAnimationsModule,
          RouterTestingModule,
          EffectsModule.forRoot(effects),
          StoreModule.forRoot(reducers as any, { metaReducers }),
        ],
        declarations: [
          CampaignKeywordsComponent,
          CampaignKeywordsListComponent,
        ],
        providers: [
          provideMockStore({ initialState }),
        ],
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CampaignKeywordsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
