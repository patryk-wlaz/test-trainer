import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadKeywordsDialogComponent } from './load-keywords-dialog.component';

describe('LoadKeywordsDialogComponent', () => {
  let component: LoadKeywordsDialogComponent;
  let fixture: ComponentFixture<LoadKeywordsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadKeywordsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadKeywordsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
