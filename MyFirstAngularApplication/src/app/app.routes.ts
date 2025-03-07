import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailComponent } from './components/pages/todo-detail/todo-detail.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TaskListComponent } from './components/task-list/task-list.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'todos', component: TodoComponent},
    {path: 'todos/:id', component: TodoDetailComponent},
    {path: '**', component: NotFoundComponent},
     {path: 'tasks', component: TaskListComponent},
];

export const appRouter = provideRouter(routes);
