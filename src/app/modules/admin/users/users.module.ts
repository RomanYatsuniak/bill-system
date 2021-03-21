import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {UsersRoutingModule} from './users-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
