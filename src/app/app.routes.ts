import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { TrainersComponent } from './trainers/trainers.component';
import { VideosComponent } from './videos/videos.component';

export const routes: Routes = [

    { path: " ", component: HomeComponent },
    { path: "about", component: CoursesComponent },
    { path: "about", component: AboutComponent },
    { path: "trainers", component: TrainersComponent }
];
