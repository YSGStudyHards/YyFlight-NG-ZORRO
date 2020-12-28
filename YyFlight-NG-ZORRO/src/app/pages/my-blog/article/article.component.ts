import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text = '';
  options: any = { maxLines: 1000, printMargin: false };

  onChange(code) {
    console.log('new code', code);
  }
}
