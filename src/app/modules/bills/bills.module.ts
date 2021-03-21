import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsComponent } from './bills.component';
import { BillsRoutingModule } from './bills-routing.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [BillsComponent],
  imports: [
    CommonModule,
    BillsRoutingModule,
    SharedModule
  ]
})
export class BillsModule { }
