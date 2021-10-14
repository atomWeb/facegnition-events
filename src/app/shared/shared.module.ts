import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material-module';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NopagefoundComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class SharedModule {}
