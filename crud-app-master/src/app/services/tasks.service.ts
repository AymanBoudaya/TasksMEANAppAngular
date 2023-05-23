import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http : HttpClient) { }
  readonly baseURL = 'http://localhost:3000/api/';

  addTask(task: any) {
    return this.http.post(this.baseURL + 'tasks', task)
  }

  updateTask(id: string, task: any) {
    return this.http.put(this.baseURL + 'tasks' + '/' + id, task)
  }

  getTaskList(): Observable<any> {
    return this.http.get(this.baseURL + 'tasks')
  }

  deleteTask(id:string): Observable<any> {
    return this.http.delete(this.baseURL + 'tasks/' + id)
  }
}
