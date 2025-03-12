import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../news.service';
import { News } from '../news.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{

  newsList: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsList = this.newsService.getAllNews();
    
  }

}
