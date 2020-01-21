import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { CoreModule } from 'app/core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { effects, metaReducers, reducers } from 'app/state';
import { StoreModule } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';

describe('Components', () => {
  describe('ProductsListComponent', () => {
    let component: ProductsListComponent;
    let fixture: ComponentFixture<ProductsListComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CoreModule,
          SharedModule,
          EffectsModule.forRoot(effects),
          StoreModule.forRoot(reducers as any, { metaReducers }),
          NoopAnimationsModule,
        ],
        declarations: [ProductsListComponent],
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ProductsListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
