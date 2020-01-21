import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from 'app/core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';
import { MatDialogRef } from '@angular/material';
import { CreateKeywordDialogComponent } from './create-keyword-dialog';

describe('Components', () => {
  describe('CreateKeywordDialogComponent', () => {
    let component: CreateKeywordDialogComponent;
    let fixture: ComponentFixture<CreateKeywordDialogComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CoreModule,
          SharedModule,
          NoopAnimationsModule,
        ],
        declarations: [CreateKeywordDialogComponent],
        providers: [
          {
            provide: MatDialogRef, useValue: MatDialogRef,
          },
        ],
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CreateKeywordDialogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
