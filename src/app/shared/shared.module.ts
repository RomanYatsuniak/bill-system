import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


const modules = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    ...modules,
    CommonModule,
  ],
  exports: [
    ...modules, AuthComponent
  ]
})
export class SharedModule { }
