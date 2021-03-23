import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {UsersRoutingModule} from './users-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { UserComponent } from './user/user.component';
import { BillsComponent } from './bills/bills.component';
import { ChangeComponent } from './change/change.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BillComponent } from './bill/bill.component';
import { NewBillComponent } from './new-bill/new-bill.component';



@NgModule({
  declarations: [UsersComponent, UserComponent, BillsComponent, ChangeComponent, BillComponent, NewBillComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
