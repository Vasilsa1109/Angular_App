import { Component } from '@angular/core';

export interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})

export class TaskFormComponent {
  tasks: Task[] = [];
  nextId: number = 0; 
  newTask: string = '';

  addTask(taskTitle: string) {
    if (taskTitle) {
      const newTask: Task = { id: this.nextId++, title: taskTitle + ` - task ${this.nextId}`  };
      this.tasks.push(newTask);
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
