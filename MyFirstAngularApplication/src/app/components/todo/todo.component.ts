import { Component, Input, OnInit } from '@angular/core';
import { TodoService, Todo } from '../../services/todo.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from 'express';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  loading = true;
  error = '';
//монтирование компонента - implements OnInit 
  constructor(private todoService: TodoService) {}


  ngOnInit(){
    this.todoService.getTodos().subscribe({ //loadTodos
      next: (data) => { 
        this.todos = data.slice(0, 10); //ограничиваем вывод в 10 штук 
        this.loading = false;
      },

      error: (err) => { //обработка ошибок
        this.error = 'Ошибка загрузки данных';
        this.loading = false;
      },
    });     
  }
  
  //  goToDetail(id: number){
  //   this.router.navigate([])
  // } 
}


