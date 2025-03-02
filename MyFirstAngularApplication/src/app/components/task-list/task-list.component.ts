// src/app/task-list/task-list.component.ts
import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskInputComponent } from '../task-input/task-input.component';

export interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule, TaskInputComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [];
  nextId: number = 0; 

  addTask(taskTitle: string) {
    if (taskTitle) {
      const newTask: Task = { id: this.nextId++, title: taskTitle + ` - task ${this.nextId}`  };
      this.tasks.push(newTask);
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  @Input() title = 'My tasks';
}
