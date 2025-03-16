import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AppButtonColorDirective } from './app-button-color.directive';
import { TodoComponent } from './components/todo/todo.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,    
    CommonModule,
    FormsModule,
    AppButtonColorDirective,
    TodoComponent,
    TaskListComponent,
    TaskInputComponent,
    NavbarComponent,
    RegisterFormComponent
  ],
})
export class AppComponent {
  title = 'todo-app';
  changeTitle() {
    this.title = 'application'
  }
}

