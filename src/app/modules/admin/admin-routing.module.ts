import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from '../../shared/guards/admin.guard';
import {NewUserComponent} from './newuser/new-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate: [AdminGuard]},
  {path: 'newuser', component: NewUserComponent, canActivate: [AdminGuard]}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule { }
