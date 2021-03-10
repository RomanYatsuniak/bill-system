import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import {UserGuard} from '../../shared/guards/user.guard';
import {AdminGuard} from '../../shared/guards/admin.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: LoginComponent}])
  ]
})
export class LoginRoutingModule { }
