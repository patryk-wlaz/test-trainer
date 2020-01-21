import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Ng5SliderModule } from 'ng5-slider';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { reducers, effects, metaReducers } from './state';

import { environment } from 'src/environments/environment';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material';
import { ContactsListDialogComponent } from './contacts-list-dialog/contacts-list-dialog';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ServerErrorComponent } from './server-error/server-error.component';

const devImports = [
  StoreDevtoolsModule.instrument({
    maxAge: 25, //  Retains last 25 states
  }),
];

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ForbiddenComponent,
    ServerErrorComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers as any, { metaReducers }),
    ...(environment.production ? [] : devImports),
    BrowserAnimationsModule,
    InfiniteScrollModule,
    MatIconModule,
    Ng5SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ContactsListDialogComponent],
})
export class AppModule { }
