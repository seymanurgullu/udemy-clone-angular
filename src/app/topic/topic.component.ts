import { Component, OnInit } from '@angular/core';
import { Topic } from './topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topics : Topic[] = [
    {
      id:1,
      name:"Development"
    },
    {
      id:2,
      name:"Business"
    },
    {
      id:3,
      name:"IT and Software"
    },
    {
      id:4,
      name:"Design"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
