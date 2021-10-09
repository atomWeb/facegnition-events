import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { HomeComponent } from '../pages/home/home.component';
import { NavmenuComponent } from '../pages/navmenu/navmenu.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavmenuComponent,
    NopagefoundComponent,
    EventsComponent,
    EventComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
  ],
})
export class PagesModule {}
