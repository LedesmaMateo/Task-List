import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from 'src/app/Tasks';
import { Subscription } from 'rxjs';
import { UiserviceService } from 'src/app/service/uiservice.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter()
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask : boolean = false;
  subscription? : Subscription;

  constructor(private uiService : UiserviceService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.text.length == 0){
      alert("Ingrese una tarea!")
    }

    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    }

    this.onAddTask.emit(newTask);
  }


}
