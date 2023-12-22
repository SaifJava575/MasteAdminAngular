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
import { MasterUserComponent } from './master-user/master-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ContentComponent } from './layout/content/content.component';
import { MasterTalukComponent } from './master-taluk/master-taluk.component';
import { MasterVillageComponent } from './master-village/master-village.component';

const routes: Routes = [
  { path: 'head-office', component: HeadofficeComponent },
  {path:'master-zone',component:MasterZoneComponent},
  {path:'master-region',component:MasterRegionComponent},
  {path:'master-depot',component:MasterDepotComponent},
  {path:'master-state',component:MasterStateComponent},
  {path:'master-district',component:MasterDistrictComponent},
  {path:'master-role',component:MasterUserRoleComponent},
  {path:'master-designation',component:MasterDesignationComponent},
  {path:'master-user',component:MasterUserComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'content',component:ContentComponent},
  {path:'master-taluk',component:MasterTalukComponent},
  {path:'master-village',component:MasterVillageComponent},
  //{path:'',redirectTo:'master-region',pathMatch:'full'},
  { path:'consumable', loadChildren: () => import('./consumable/consumable.module').then(m => m.ConsumableModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
