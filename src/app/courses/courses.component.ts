import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterLink} from '@angular/router';
import { COURSES } from './courses';
import { Courses } from './courses.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
    animations: [
      trigger('expand', [
        // state('in', style({height: '0px'})),
        transition(':enter', [style({height: '0px'}), animate('200ms', style({height: '200px'}))]),
        transition(':leave', [animate('200ms', style({height: '0px'}))]),
      ]),
    ],
})
export class CoursesComponent implements OnInit{
   emiter = new EventEmitter<number | null>
   visible: null | number = null;

 courses: Courses[] = COURSES;

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


