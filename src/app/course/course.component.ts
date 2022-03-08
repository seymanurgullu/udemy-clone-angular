import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

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
