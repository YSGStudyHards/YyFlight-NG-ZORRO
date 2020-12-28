import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  title='✨Angular之使用NG-ZORRO企业级中后台框架，搭建自己的后台管理框架。';
  constructor() { }

  ngOnInit(): void {
  }

}
