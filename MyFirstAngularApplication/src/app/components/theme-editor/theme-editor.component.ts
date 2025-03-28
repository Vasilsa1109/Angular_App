import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-theme-editor',
  imports: [],
  templateUrl: './theme-editor.component.html',
  styleUrl: './theme-editor.component.scss'
})
export class ThemeEditorComponent {
  constructor(private themeService: ThemeService){}
setTheme(){
  const updatedTheme = 'dark';
  this.themeService.setTheme(updatedTheme);
}
}
