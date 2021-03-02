import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteConfigLoadEnd, RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './bills.component';

const routes: Routes = [
  {path: '', component: BillsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class BillsRoutingModule { }
