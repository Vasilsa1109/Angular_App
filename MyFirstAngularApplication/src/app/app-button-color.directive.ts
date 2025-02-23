import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppButtonColor]'
})
export class AppButtonColorDirective {
  @Input('appAppButtonColor') originalColor: string = 'blue';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // При наведении меняем цвет кнопки на синий
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalColor);
  }

  // При уходе курсора восстанавливаем исходный цвет
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
  }