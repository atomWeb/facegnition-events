import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material-module'
import { SharedModule } from '../shared/shared.module'

import { NavmenuComponent } from './navmenu.component'
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { PersonComponent } from './person/person.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    NavmenuComponent,
    HomeComponent,    
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
