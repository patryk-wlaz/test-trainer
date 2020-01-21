import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatIconService } from './mat-icon.service';

import { AuthGuard, RoleGuard } from './guards';

import { ClientsHttpService } from './http/clients-http.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UsersHttpService } from './http/users-http.service';
import { NewsHttpService } from './http/news-http.service';

import { APIMock } from 'app/core/api-mock';
import { PersonalHttpService } from './http/personal-http.service';
import { defaults } from '@config/defaults';

@NgModule({
  // declarations are forbidden in the CoreModule, use feature modules or SharedModule instead
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(APIMock, defaults.inMemoryApiSettings),
  ],
  providers: [
    ClientsHttpService,
    UsersHttpService,
    NewsHttpService,
    MatIconService,
    AuthGuard,
    RoleGuard,
    PersonalHttpService,
  ],
})
export class CoreModule {}
