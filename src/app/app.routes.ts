import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { TrainersComponent } from './trainers/trainers.component';
import { VideosComponent } from './videos/videos.component';
import { ReviewComponent } from './review/review.component';
import { NewsComponent } from './home/news/news.component';


export const routes: Routes = [

    { path: "", component: HomeComponent },
    { path: "reviewDetails/:id", component: NewsComponent },
    { path: "courses", component: CoursesComponent },
    { path: "about", component: AboutComponent },
    { path: "trainers", component: TrainersComponent },
    { path: "videos", component: VideosComponent },
    { path: "review", component: ReviewComponent },

];
