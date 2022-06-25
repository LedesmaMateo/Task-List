import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Tasks';
import {TASKS} from '../../mock-tasks';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() toggleReminderTask: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    this.onDeleteTask.emit(task)
  }

  toggleReminder(task:Task){
    this.toggleReminderTask.emit(task);
  }
}
