import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTableMessageRowComponent } from './table-message-row.component';

describe('AppTableMessageRowComponent', () => {
  let component: AppTableMessageRowComponent;
  let fixture: ComponentFixture<AppTableMessageRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTableMessageRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTableMessageRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
