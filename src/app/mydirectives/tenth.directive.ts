import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTenth]',
  exportAs: 'highlighter'
})
export class TenthDirective {
@Input('appTenth') highlighterin:string
  constructor(private el:ElementRef, private renderer:Renderer2) { }
@HostListener("mouseover") applycolor(){
  this.changeColor(this.highlighterin)
}
@HostListener("mouseleave") removecolor() {
  this.changeColor(null);
  this.renderer.removeAttribute(this.el.nativeElement,"style");
}
changeColor(highlightcolor:string){
  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', highlightcolor)
}

}
