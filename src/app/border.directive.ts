import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {
  constructor(private el: ElementRef) { }

   @HostListener('mouseenter') onMouseEnter() {
     this.highlight('5px solid blue');
   }

   @HostListener('mouseleave') onMouseLeave() {
     this.highlight(null);
   }

   private highlight(border: string) {
     this.el.nativeElement.style.border = border;
     this.el.nativeElement.style.borderStyle = 'dashed';
   }

}
