import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavmenuComponent } from './navmenu.component'

const routes: Routes = [
  {
    path: 'home', component: NavmenuComponent,
    loadChildren: () => import("./child-routes.module").then( m => m.ChildRoutesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
