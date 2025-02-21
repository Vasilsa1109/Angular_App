import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonColor]'
})

export class ButtonColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeStyle(this.el.nativeElement, 'color', 'yellow');
  }
}
