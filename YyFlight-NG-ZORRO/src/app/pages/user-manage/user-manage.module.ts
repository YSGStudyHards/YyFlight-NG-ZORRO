import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManageRoutingModule } from './user-manage-routing.module';
import { UserInfoComponent } from './user-info/user-info.component';


@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    UserManageRoutingModule
  ]
})
export class UserManageModule { }
