import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignStrategyAdsplitComponent } from './campaign-strategy-adsplit.component';

describe('CampaignStrategyAdsplitComponent', () => {
  let component: CampaignStrategyAdsplitComponent;
  let fixture: ComponentFixture<CampaignStrategyAdsplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignStrategyAdsplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignStrategyAdsplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
