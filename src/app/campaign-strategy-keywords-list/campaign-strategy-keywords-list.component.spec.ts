import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignStrategyKeywordsListComponent } from './campaign-strategy-keywords-list.component';

describe('CampaignStrategyKeywordsListComponent', () => {
  let component: CampaignStrategyKeywordsListComponent;
  let fixture: ComponentFixture<CampaignStrategyKeywordsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignStrategyKeywordsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignStrategyKeywordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
