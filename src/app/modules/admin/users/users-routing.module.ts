import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {AdminGuard} from '../../../shared/guards/admin.guard';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {path: '', component: UsersComponent, canActivate: [AdminGuard], pathMatch: 'full'},
  {path: ':id', component: UserComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
