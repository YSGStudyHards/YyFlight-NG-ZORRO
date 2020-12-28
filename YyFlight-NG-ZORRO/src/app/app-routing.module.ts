import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  //页面默认调转路由跳转
  { path: '', pathMatch: 'full', redirectTo: '/MyBlog/Index' },

  //模块路由配置
  { path: '', loadChildren: () => import('./pages/my-blog/my-blog.module').then(m => m.MyBlogModule) },
  { path: '', loadChildren: () => import('./pages/user-manage/user-manage.module').then(m => m.UserManageModule) },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
