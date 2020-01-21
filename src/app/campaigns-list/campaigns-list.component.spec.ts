import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsListComponent } from './campaigns-list.component';
import { CoreModule } from 'app/core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { effects, metaReducers, reducers } from 'app/state';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

describe('Components', () => {
  describe('CampaignsListComponent', () => {
    let component: CampaignsListComponent;
    let fixture: ComponentFixture<CampaignsListComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CoreModule,
          SharedModule,
          RouterTestingModule,
          EffectsModule.forRoot(effects),
          StoreModule.forRoot(reducers as any, { metaReducers }),
          NoopAnimationsModule,
          InfiniteScrollModule,
        ],
        declarations: [CampaignsListComponent],
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CampaignsListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
