import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material-module'
import { SharedModule } from '../shared/shared.module'

import { HomeComponent } from '../pages/home/home.component';
import { NavmenuComponent } from '../pages/navmenu/navmenu.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { PersonComponent } from './person/person.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavmenuComponent,
    EventsComponent,
    EventComponent,
    PersonComponent,
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    SharedModule,
  ],
})
export class PagesModule {}
