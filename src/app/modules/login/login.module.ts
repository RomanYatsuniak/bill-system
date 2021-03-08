import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    CommonModule,
    FormsModule,
  ]
})
export class LoginModule { }
