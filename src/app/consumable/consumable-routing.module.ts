import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterUnitComponent } from './master-unit/master-unit.component';

const routes: Routes = [
  {
    path: '',
    children:[
      { path: 'master-unit', component: MasterUnitComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumableRoutingModule { }
