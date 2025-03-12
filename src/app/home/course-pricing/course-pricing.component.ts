import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Price } from '../../course.model';

@Component({
  selector: 'app-course-pricing',
  imports: [RouterLink],
  templateUrl: './course-pricing.component.html',
  styleUrl: './course-pricing.component.css'
})
export class CoursePricingComponent {

  pricingList: Price[] = [];
}
