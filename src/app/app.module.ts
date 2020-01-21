import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

import {WmNgComponentsModule} from 'wm-ng-components';
import {FeatherModule} from 'angular-feather';

import {environment} from 'src/environments/environment';
import {reducers, effects, facades} from './state';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';

import {AppComponent} from './app.component';
import {
  AudiencesWrapperComponent,
  BudgetWrapperComponent,
  BriefsWrapperComponent,
  GrowthOpportunitiesWrapperComponent,
  MarketAdminWrapperComponent,
  LoginComponent,
  PageSpeedInsightsWrapperComponent,
  ScorecardsWrapperComponent,
  WmNgComponentsShowcaseComponent,
} from './pages';
import {MatChipsModule} from '@angular/material/chips';
import { SetupHeaderComponent } from './pages/setup-header/setup-header.component';
import { SetupHeaderCompleteComponent } from './pages/setup-header-complete/setup-header-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AudiencesWrapperComponent,
    BudgetWrapperComponent,
    BriefsWrapperComponent,
    GrowthOpportunitiesWrapperComponent,
    MarketAdminWrapperComponent,
    ScorecardsWrapperComponent,
    PageSpeedInsightsWrapperComponent,
    WmNgComponentsShowcaseComponent,
    SetupHeaderComponent,
    SetupHeaderCompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    EffectsModule.forRoot(effects),
    SharedModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    WmNgComponentsModule,
    FeatherModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatChipsModule,
  ],
  exports: [WmNgComponentsModule],
  providers: [...facades],
  bootstrap: [AppComponent],
})
export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
