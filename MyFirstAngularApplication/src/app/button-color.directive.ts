// import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
// import { Input } from '@angular/core';

// @Directive({
//   selector: '[appButtonColor]'
// })

// export class ButtonColorDirective {

//   @Input('appButtonColor') highlightColor: string = 'blue';

//   constructor(private el: ElementRef, private renderer: Renderer2) { }
  
//   @HostListener('mouseenter') onMouseEnter(){
//     this.renderer.setStyle(this.el.nativeElement, 'color', this.highlightColor);
//   }
//   @HostListener('mouseleave') onMouseLeave(){
//     this.renderer.removeStyle(this.el.nativeElement, 'color');
//   }
// }


import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonColor]'
})

export class ButtonColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue'); 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor'); 
  }
}
