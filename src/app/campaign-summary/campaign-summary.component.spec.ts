import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSummaryComponent } from './campaign-summary.component';
import { CoreModule } from 'app/core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { effects, metaReducers, reducers } from 'app/state';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'app/shared/shared.module';

describe('CampaignSummaryComponent', () => {
  let component: CampaignSummaryComponent;
  let fixture: ComponentFixture<CampaignSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignSummaryComponent ],
      imports: [
        CommonModule,
        CoreModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule,
        RouterTestingModule,
        EffectsModule.forRoot(effects),
        StoreModule.forRoot(reducers as any, { metaReducers }),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
