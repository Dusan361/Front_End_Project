import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Trainers } from './trainers.model';
import { TRAINERS } from './trainers';

@Component({
  selector: 'app-trainers',
  imports: [RouterModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css'
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
