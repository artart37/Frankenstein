import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMythirddirective]'
})
export class MythirddirectiveDirective {
@Input('appMythirddirective') somevar:HTMLParagraphElement

constructor(private el:ElementRef, private renderer:Renderer2) { }

@HostListener('mouseenter') jukovskiy() {
this.renderer.setStyle(this.somevar,'color','red');
}
@HostListener('mouseleave') jukolik() {
  this.renderer.setStyle(this.somevar,'color','black');
}



}
