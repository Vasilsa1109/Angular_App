import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TodoDetailComponent } from './components/pages/todo-detail/todo-detail.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'todos', loadComponent:
    () => import('../app/components/todo/todo.component')
.then(m => m.TodoComponent)},
    {path: 'todos/:id', component: TodoDetailComponent},
    {path: 'tasks', component: TaskListComponent},
    {path: 'about', component: AboutComponent},
    {path: 'form', component: RegisterFormComponent},
    {path: '**', component: NotFoundComponent}
];

export const appRouter = provideRouter(routes);
