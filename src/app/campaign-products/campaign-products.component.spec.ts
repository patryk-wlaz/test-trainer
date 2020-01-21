import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignProductsComponent } from './campaign-products.component';
import { CoreModule } from 'app/core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { effects, metaReducers, reducers } from 'app/state';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';
import { CampaignProductsInputComponent } from 'app/campaign-products-input/campaign-products-input.component';
import { ProductsListComponent } from '../products-list/products-list.component';

describe('Components', () => {
  describe('CampaignProductsComponent', () => {
    let component: CampaignProductsComponent;
    let fixture: ComponentFixture<CampaignProductsComponent>;

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
        declarations: [CampaignProductsComponent, CampaignProductsInputComponent, ProductsListComponent],
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CampaignProductsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
