import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadofficeComponent } from './headoffice/headoffice.component';
import { MasterZoneComponent } from './master-zone/master-zone.component';
import { MasterRegionComponent } from './master-region/master-region.component';
import { MasterDepotComponent } from './master-depot/master-depot.component';
import { MasterStateComponent } from './master-state/master-state.component';
import { MasterDistrictComponent } from './master-district/master-district.component';
import { MasterUserRoleComponent } from './master-user-role/master-user-role.component';
import { MasterDesignationComponent } from './master-designation/master-designation.component';

const routes: Routes = [
  { path: 'head-office', component: HeadofficeComponent },
  {path:'master-zone',component:MasterZoneComponent},
  {path:'master-region',component:MasterRegionComponent},
  {path:'master-depot',component:MasterDepotComponent},
  {path:'master-state',component:MasterStateComponent},
  {path:'master-district',component:MasterDistrictComponent},
  {path:'master-role',component:MasterUserRoleComponent},
  {path:'master-designation',component:MasterDesignationComponent},
  {path:'',redirectTo:'master-designation',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
