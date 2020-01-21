import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from 'app/main-header/main-header.component';
import { CoreModule } from 'app/core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { effects, metaReducers, reducers } from 'app/state';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'app/shared/shared.module';
import { MainFooterComponent } from 'app/main-footer/main-footer.component';

describe('Components', () => {
  describe('AppComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CoreModule,
          SharedModule,
          RouterTestingModule,
          EffectsModule.forRoot(effects),
          StoreModule.forRoot(reducers as any, { metaReducers }),
        ],
        declarations: [
          MainHeaderComponent,
          AppComponent,
          MainFooterComponent,
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  });
});
