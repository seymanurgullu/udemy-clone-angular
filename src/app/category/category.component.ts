import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = [
    {
      id:1,
      name:"Design",
      imagePath : "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
    },
    {
      id:2,
      name:"Development",
      imagePath : "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
    },
    {
      id:3,
      name:"Marketing",
      imagePath : "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
    },
    {
      id:4,
      name:"IT and Software",
      imagePath : "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
    },
    {
      id:5,
      name:"Personel Development",
      imagePath : "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
    },
    {
      id:6,
      name:"Business",
      imagePath : "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
    },
    {
      id:7,
      name:"Photography",
      imagePath : "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
    },
    {
      id:8,
      name:"Music",
      imagePath : "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
