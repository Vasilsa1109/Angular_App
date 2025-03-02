import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppButtonColorDirective } from './app-button-color.directive';
import { TodoComponent } from './components/todo/todo.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
// import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,    
    CommonModule,
    FormsModule,
    AppButtonColorDirective,
    TodoComponent,
    TaskListComponent,
    NavbarComponent
  ],
})
export class AppComponent {
  // data: string;
  // constructor(private apiService: ApiService ){
  //   this.data = this.apiService.getData();
  // }
  title = 'todo-app';
  changeTitle() {
    this.title = 'application'
  }
}

