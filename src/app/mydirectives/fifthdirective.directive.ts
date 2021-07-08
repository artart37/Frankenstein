import { Directive, HostListener,HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFifthdirective]'
})
export class FifthdirectiveDirective {

constructor(private renderer:Renderer2, private el:ElementRef) {}
//Example 23
@HostListener("click", ["$event.target.nodeName", "$event", "$event.target"]) getelname(btn, e, etel){
alert("The target element nodeName: " + btn + ", " + "The event: " + e + ", " + "The target element: " + etel)
}
//Example 24
@HostBinding("style.color") paracolor:string;
@HostBinding("class.testc") classy:boolean;
@HostBinding("class.juk") get juk() {return "juk"};//Alternative @HostBinding("attr.class") class="juk";
@HostListener("mouseover") hla(){
  this.paracolor="red";
  this.classy=true;
};
@HostListener("mouseleave") hln(){
    this.paracolor="black";
    this.classy=false;
    this.renderer.removeAttribute(this.el.nativeElement, "class")
};


}