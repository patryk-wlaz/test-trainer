import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from 'app/core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';
import { Product, ProductTypes } from '@common/index';
import { AssignProductsDialogComponent } from 'app/assign-products-dialog/assign-products-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

const sampleProducts: Product[] = [
    {
      'id': 'c1ef9796-4d0b-4045-8619-c406e2081c3a',
      'name': 'some product name',
      'asin': 'ASIN12222456',
      'retailHealth': 10,
      'imageUrl': null,
      'type': 'COMPETITOR' as ProductTypes,
      'priority': true,
      'campaignId': 'e5f500c8-5ebe-4773-ae22-92c3ba921c02',
      'createdBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'updatedBy': 'a9c4b932-da43-4cf4-badc-24235be7c009',
      'createdAt': new Date(),
      'updatedAt': new Date(),
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
    },
  ];

describe('Components', () => {
  describe('AssignProductsDialogComponent', () => {
    let component: AssignProductsDialogComponent;
    let fixture: ComponentFixture<AssignProductsDialogComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CoreModule,
          SharedModule,
          NoopAnimationsModule,
        ],
        declarations: [AssignProductsDialogComponent],
        providers: [
          {
            provide: MAT_DIALOG_DATA, useValue: {
              products: sampleProducts,
              productsIds: ['c1ef9796-4d0b-4045-8619-c406e2081c3a'],
            },
          },
          {
            provide: MatDialogRef, useValue: MatDialogRef,
          },
        ],
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AssignProductsDialogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
