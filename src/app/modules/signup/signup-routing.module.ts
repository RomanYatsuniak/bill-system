import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([{path: '', component: SignupComponent}]),
    CommonModule
  ],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
