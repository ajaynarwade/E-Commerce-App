import { Component } from '@angular/core';

interface Category {
  name: string;
  image: string; // Ensure image is defined in the interface
}

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss'],
})
export class CategorySectionComponent {

}
