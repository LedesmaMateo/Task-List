import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Task } from 'src/app/Tasks';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

//Esto le informa al backend que le estamos enviando un json.
const httpOptions = {
  headers: new HttpHeaders({
    'content-Type':'application/json'
  })

}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks'
  
  constructor(private http: HttpClient) { }

  //Mostrar las tareas
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL);
  }

  //Borrar las tareas
  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    return this.http.delete<Task>(url)
  }
 
  //Actualizar el estado del reminder
  updateTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions) //httpOptions que instanciamos arriba
  }

  //Agregando una nueva tarea 
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiURL, task, httpOptions)
  }
}
