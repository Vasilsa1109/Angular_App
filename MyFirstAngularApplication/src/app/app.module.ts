import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonColorDirective } from './button-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonColorDirective
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }