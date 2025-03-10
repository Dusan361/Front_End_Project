import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Trainers } from './trainers.model';
import { TRAINERS } from './trainers';

@Component({
  selector: 'app-trainers',
  imports: [RouterModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css'
})
export class TrainersComponent {
trainers: Trainers[] = TRAINERS;
}
