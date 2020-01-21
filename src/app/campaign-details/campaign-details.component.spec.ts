import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailsComponent } from './campaign-details.component';
import { CoreModule } from 'app/core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { effects, metaReducers, reducers } from 'app/state';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'app/shared/shared.module';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('CampaignDetailsComponent', () => {
  let component: CampaignDetailsComponent;
  let fixture: ComponentFixture<CampaignDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailsComponent ],
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
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }),
            parent: { paramMap: of({ campaignId: 123  }) },
          },
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
