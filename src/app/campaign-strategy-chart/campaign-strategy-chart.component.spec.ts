import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignStrategyChartComponent } from './campaign-strategy-chart.component';

describe('CampaignStrategyKeywordsComponent', () => {
  let component: CampaignStrategyChartComponent;
  let fixture: ComponentFixture<CampaignStrategyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignStrategyChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignStrategyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
