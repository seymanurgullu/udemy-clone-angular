import { Component, OnInit } from '@angular/core';
import { Category } from '../category/category';
import { Course } from '../course/course';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent implements OnInit {

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

  courses : Course[] = [
    {
      id:1,
      title: "Komple ASP.NET Web Geliştirme Eğitimi",
      instructor:"Engin Demiroğ",
      imagePath:"https://img-c.udemycdn.com/course/240x135/1830530_7f5a_3.jpg",
      stars: 4.9,
      student: 26756,
      price: 219.99,
      discountedPrice: 27.99
    },
    {
      id:2,
      title: "The Complete 2021 Web Development Bootcamp",
      instructor:"Dr. Angela Yu",
      imagePath:"https://img-c.udemycdn.com/course/240x135/1565838_e54e_12.jpg",
      stars: 4.5,
      student: 146122,
      price: 219.99,
      discountedPrice: 27.99
    },
    {
      id:3,
      title: "Machine Learning A-Z™: Hands-On Python",
      instructor:"Kirill Eremenko",
      imagePath:"https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
      stars: 4.5,
      student: 149720,
      price: 219.99,
      discountedPrice: 27.99
    },
    {
      id:4,
      title: "The Complete Cyber Security Course : Hackers Exposed!",
      instructor:"Nathan House",
      imagePath:"https://img-c.udemycdn.com/course/240x135/614772_233b_9.jpg",
      stars: 4.5,
      student: 37341,
      price: 219.99,
      discountedPrice: 27.99
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
