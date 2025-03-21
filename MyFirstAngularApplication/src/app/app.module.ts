import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppButtonColorDirective } from './app-button-color.directive';
import { FormsModule } from '@angular/forms';
import { ColorsDirective } from './directives/colors.directive';
@NgModule({
  declarations: [
    AppComponent,
    AppButtonColorDirective,
    ColorsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }