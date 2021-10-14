import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { Priorities } from 'src/app/shared/types/priorities';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [
    {
      
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
