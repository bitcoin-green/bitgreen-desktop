import { Component, OnInit, Input, Output } from '@angular/core';
import { IArticle } from 'app/types/wallet';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() article: IArticle;

  constructor() {}

  ngOnInit() {}
}
