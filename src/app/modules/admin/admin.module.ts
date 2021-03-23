import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {NewUserComponent} from './newuser/new-user.component';
import {SignupModule} from '../signup/signup.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [NewUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SignupModule,
    SharedModule
  ]
})
export class AdminModule { }
