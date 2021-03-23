import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';



const modules = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatListModule,
  MatIconModule,
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    CommonModule,
  ],
  exports: [
    ...modules, AuthComponent
  ]
})
export class SharedModule { }
