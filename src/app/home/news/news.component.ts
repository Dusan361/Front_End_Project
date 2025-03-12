import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { News } from '../../news.model';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{

  news!: News | undefined;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    const newsId = Number(this.route.snapshot.paramMap.get('id'));
    this.news = this.newsService.getNewsById(newsId);
  }

}
