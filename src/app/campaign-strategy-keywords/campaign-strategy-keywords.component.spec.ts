import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignStrategyKeywordsComponent } from './campaign-strategy-keywords.component';

describe('CampaignStrategyKeywordsComponent', () => {
  let component: CampaignStrategyKeywordsComponent;
  let fixture: ComponentFixture<CampaignStrategyKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignStrategyKeywordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignStrategyKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
