import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadofficeComponent } from './headoffice/headoffice.component';

const routes: Routes = [
  { path: 'head-office', component: HeadofficeComponent },
    {path:'',redirectTo:'head-office',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
