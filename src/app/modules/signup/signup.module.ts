import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



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
