import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-detail',
  standalone: true,
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss'
})
export class TodoDetailComponent {
  todoId: number | null = null;

  constructor(private route: ActivatedRoute){
    this.route.paramMap.subscribe(params => {
      this.todoId = Number(params.get('id'));
    })
  }
}
