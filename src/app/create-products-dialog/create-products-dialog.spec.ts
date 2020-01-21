import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from 'app/core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';
import { MatDialogRef } from '@angular/material';
import { CreateProductsDialogComponent } from 'app/create-products-dialog/create-products-dialog';

describe('Components', () => {
  describe('CreateProductsDialogComponent', () => {
    let component: CreateProductsDialogComponent;
    let fixture: ComponentFixture<CreateProductsDialogComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CoreModule,
          SharedModule,
          NoopAnimationsModule,
        ],
        declarations: [CreateProductsDialogComponent],
        providers: [
          {
            provide: MatDialogRef, useValue: MatDialogRef,
          },
        ],
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CreateProductsDialogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
