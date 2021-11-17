import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MaterialModule } from './material-module'
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import Amplify from 'aws-amplify';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,

  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    /* Configure Amplify resources */
    Amplify.configure({
      region: 'us-east-1',
      userPoolId: environment.userpoolid,
      userPoolWebClientId: environment.userpoolwebclientid,
    });
  }
}
