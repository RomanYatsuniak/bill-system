import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignupComponent,
    SignupFormComponent
  ],
  imports: [
    SignupRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
