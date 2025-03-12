import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { News } from '../../news.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{

  newsList: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    /*this.newsList = this.newsService.getAllNews();*/
  }

}
