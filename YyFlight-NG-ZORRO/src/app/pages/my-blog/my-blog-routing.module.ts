import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ArticleComponent } from './article/article.component';

//博客管理页面路由模块配置
const routes: Routes = [
  {
    path: 'MyBlog',
    data: { breadcrumb: '博客管理' },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'Index', },
      { path: 'Index', component: IndexComponent, data: { breadcrumb: '博客首页' } },
      { path: 'Article', component: ArticleComponent, data: { breadcrumb: '文章管理' } },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyBlogRoutingModule { }
