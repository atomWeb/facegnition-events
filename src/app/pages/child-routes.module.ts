import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { EventsComponent } from './events/events.component'
import { EventComponent } from './event/event.component'
import { PersonComponent } from './person/person.component'

const childRoutes: Routes = [

  { path: '', component: HomeComponent, data:{ title: 'Home' } },
  { path: 'events', component: EventsComponent, data:{ title: 'Events list.' } },
  { path: 'event', component: EventComponent, data:{ title: 'Add event.' } },
  { path: 'person', component: PersonComponent, data:{ title: 'Add person.' } },

];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule {}
