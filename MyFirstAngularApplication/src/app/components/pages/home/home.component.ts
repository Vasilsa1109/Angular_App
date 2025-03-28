import { Component } from '@angular/core';
import { TaskThemeComponent } from '../../task-theme/task-theme.component';
import { ThemeEditorComponent} from '../../theme-editor/theme-editor.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskThemeComponent,  ThemeEditorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
