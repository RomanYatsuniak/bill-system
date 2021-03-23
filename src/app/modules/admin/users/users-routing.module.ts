import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {AdminGuard} from '../../../shared/guards/admin.guard';
import {UserComponent} from './user/user.component';
import {BillsComponent} from './bills/bills.component';
import {ChangeComponent} from './change/change.component';
import {BillComponent} from './bill/bill.component';
import {NewBillComponent} from './new-bill/new-bill.component';


const routes: Routes = [
  {path: '', component: UsersComponent, canActivate: [AdminGuard]},
  {path: ':id', component: UserComponent},
  {path: ':id/bills', pathMatch: 'full', component: BillsComponent, canActivate: [AdminGuard]},
  {path: ':id/change', pathMatch: 'full', component: ChangeComponent, canActivate: [AdminGuard]},
  {path: ':id/bills/newbill', pathMatch: 'full', component: NewBillComponent, canActivate: [AdminGuard]},
  {path: ':id/bills/:billId', pathMatch: 'full', component: BillComponent, canActivate: [AdminGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
