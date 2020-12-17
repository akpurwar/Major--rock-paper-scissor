import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/utility/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any;
  startpage: number;
  paginationLimit: number;
  articles;
  constructor(private _newsServ: NewsService) {
    this.startpage = 0;
    this.paginationLimit = 3;
  }

  ngOnInit(): void {
    this._newsServ.getNews().subscribe((n) => {
      console.log(n);
      this.news = n;
    });
  }

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 3;
  }
  showLessItems() {
    this.paginationLimit = Number(this.paginationLimit) - 3;
  }
}
