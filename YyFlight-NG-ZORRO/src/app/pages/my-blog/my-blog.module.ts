import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBlogRoutingModule } from './my-blog-routing.module';
import { IndexComponent } from './index/index.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  //配置当前模块运行依赖的其他模块,那些导出了本模块中的组件模板所需的类的其它模块
  imports: [
    CommonModule,
    MyBlogRoutingModule
  ],

  //那些能在其它模块的组件模板中使用的可声明对象的子集
  exports: [],

  //配置当前项目运行的组件,那些属于本 NgModule 的组件、指令、管道。
  declarations: [
    IndexComponent,
    ArticleComponent
  ],
})
export class MyBlogModule { }
