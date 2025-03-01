
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {
  newTask: string = '';

  @Output() addTask = new EventEmitter<string>();

  submitTask() {
    if (this.newTask) {
      this.addTask.emit(this.newTask);
      this.newTask = '';
    }
  }
}
