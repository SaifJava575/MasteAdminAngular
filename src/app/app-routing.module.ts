import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadofficeComponent } from './headoffice/headoffice.component';
import { MasterZoneComponent } from './master-zone/master-zone.component';
import { MasterRegionComponent } from './master-region/master-region.component';
import { MasterDepotComponent } from './master-depot/master-depot.component';

const routes: Routes = [
  { path: 'head-office', component: HeadofficeComponent },
  {path:'master-zone',component:MasterZoneComponent},
  {path:'master-region',component:MasterRegionComponent},
  {path:'master-depot',component:MasterDepotComponent},
  {path:'',redirectTo:'master-depot',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
