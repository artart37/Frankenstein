import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMyfourthdirective]',
  exportAs:"myfourthd"
})
export class MyfourthdirectiveDirective {
@Input() size:number;
@Output() sizeChange:EventEmitter<number> = new EventEmitter;

constructor() { }

dec () {this.resize(-1);}
inc() {this.resize(+1);}

resize(val:number) {
  this.size=Math.min(40, Math.max(8, +this.size + val));
  this.sizeChange.emit(this.size);
}



}
