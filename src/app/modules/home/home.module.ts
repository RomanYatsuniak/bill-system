import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, TableComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
