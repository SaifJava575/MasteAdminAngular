import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadofficeComponent } from './headoffice/headoffice.component';
import { MasterZoneComponent } from './master-zone/master-zone.component';

const routes: Routes = [
  { path: 'head-office', component: HeadofficeComponent },
  {path:'master-zone',component:MasterZoneComponent},
  {path:'',redirectTo:'head-office',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
