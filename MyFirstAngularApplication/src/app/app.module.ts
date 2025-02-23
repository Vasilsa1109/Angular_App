import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppButtonColorDirective } from './app-button-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppButtonColorDirective
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }