import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes =  [
  {
    path: 'UserManage',
    data: { breadcrumb: '博客管理' },
    children: [
      { path: 'UserInfo', component: UserInfoComponent,data: { breadcrumb: '用户信息' }  }
    ]
  }
];

[ ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManageRoutingModule { }
