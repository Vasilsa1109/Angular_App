import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-task-theme',
  imports: [],
  templateUrl: './task-theme.component.html',
  styleUrl: './task-theme.component.scss'
})
export class TaskThemeComponent implements OnInit{
  constructor(private themeService: ThemeService){}
  theme: any;
 
  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.theme = theme;
    })
  }
}
