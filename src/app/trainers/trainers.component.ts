import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Trainers } from './trainers.model';
import { TRAINERS } from './trainers';
import { animate, group, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-trainers',
  imports: [RouterModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css',
  animations: [
    trigger('expand', [
      // state('in', style({height: '0px'})),
      transition(':enter', [style({height: '0px'}), animate('200ms', style({height: '200px'}))]),
      transition(':leave', [animate('200ms', style({height: '0px'}))]),
    ]),
  ],
})
export class TrainersComponent implements OnInit{
   emiter = new EventEmitter<number | null>
    visible: null | number = null;
 
trainers: Trainers[] = TRAINERS;

ngOnInit(){
  this.emiter.subscribe((num)=>{
    this.visible = num
  })
}
onToggleVisible(index:number){
 console.log(this.visible);


  console.log(index);
  if (this.visible == index) {
    this.emiter.emit(null)
  }else{
    this.emiter.emit(index)
  }


 
  
  
}
}
