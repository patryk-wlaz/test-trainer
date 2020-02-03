import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiSwitchModule } from 'ngx-toggle-switch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { TestComponent } from './test/test.component';
import { LearningModeComponent } from './learning-mode/learning-mode.component';
import { TestingModeComponent } from './testing-mode/testing-mode.component';
import { QuestionComponent } from './question/question.component';
import { TestsListComponent } from './tests-list/tests-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    TestComponent,
    LearningModeComponent,
    TestingModeComponent,
    QuestionComponent,
    TestsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
