import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo{
  userId: number;
  id: number;
  title: string;
  completed: true;
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl); 
  }
  //Observable<Todo[]> - нужен для получения асинхронно, как промис 

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/$id`);
  } 
  //получение задачи по айди

  addTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }
  
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  } //метод типа void
}

