import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../news.service';
import { News } from '../news.model';
import { Price } from '../course.model';
import { pricingList } from '../course';



@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{

  newsList: News[] = [];
  pricingList: Price[] = pricingList;

constructor(private newsService: NewsService) { }


  ngOnInit(): void {
    this.newsList = this.newsService.getAllNews();

    console.log(this.pricingList);
    
  }

}
