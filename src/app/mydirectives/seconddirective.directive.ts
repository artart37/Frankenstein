import { Directive, HostListener, Output, EventEmitter, Input, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appSeconddirective]'
})
export class SeconddirectiveDirective {
 @Output() text:EventEmitter<string>=new EventEmitter()
 @Input() checkiftextiselected:string
 @Output() dbooldis:EventEmitter<boolean>= new EventEmitter;
 @HostListener('mouseup') mymethodformouseenter(){
      this.toggleclasstotheselectedtext()
 }
constructor(private el:ElementRef, private renderer:Renderer2) { }
private toggleclasstotheselectedtext(){
  if (window.getSelection().toString().replace(/\s/g,"")!=="" && window.getSelection().toString().length >= 1) {
    this.dbooldis.emit(true);
    this.text.emit(window.getSelection().toString());
    const selector=".juk";
    const time = 1;
    setTimeout(() => {
      this.checkiftextiselected!==undefined && this.checkiftextiselected!==null?this.renderer.addClass(document.querySelector(selector), 'aclassformysecondirectiverenderer'):null;      
    },time);  
  }
  else {
    this.dbooldis.emit(false)
  }
}
}