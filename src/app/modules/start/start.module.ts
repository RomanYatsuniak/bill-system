import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import {Router, RouterModule} from '@angular/router';



@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: StartComponent}])
  ]
})
export class StartModule { }
