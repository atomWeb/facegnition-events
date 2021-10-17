import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MaterialModule } from './material-module'
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
// import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';

// import { FileUploadComponent } from './components/file-upload/file-upload.component'


@NgModule({
  declarations: [
    AppComponent,
    // FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    PagesModule,
    // SharedModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
