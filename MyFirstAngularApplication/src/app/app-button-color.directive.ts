import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppButtonColor]'
})
export class AppButtonColorDirective {
  private originalColor: string;

  constructor(private el: ElementRef) {
    // Сохраняем начальный цвет кнопки
    this.originalColor = this.el.nativeElement.style.backgroundColor;
  }

  // При наведении меняем цвет кнопки на синий
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  // При уходе курсора восстанавливаем исходный цвет
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.originalColor;
  }
}