import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { ConsumableRoutingModule } from './consumable-routing.module';
import { MasterUnitComponent } from './master-unit/master-unit.component';


@NgModule({
  declarations: [
    MasterUnitComponent
  ],
  imports: [
    CommonModule,
    ConsumableRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ConsumableModule { }
