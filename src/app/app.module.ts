import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { BoxEmailTemplateComponent } from './box-email-template/box-email-template.component';
import { BoxTimerTemplateComponent } from './box-timer-template/box-timer-template.component';
import { BoxStartTemplateComponent } from './box-start-template/box-start-template.component';
import { BoxConditionalTemplateComponent } from './box-conditional-template/box-conditional-template.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    BoxEmailTemplateComponent,
    BoxTimerTemplateComponent,
    BoxStartTemplateComponent,
    BoxConditionalTemplateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
