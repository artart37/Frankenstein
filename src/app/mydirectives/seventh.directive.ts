import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'button'
})
export class SeventhDirective {

constructor() { }
@HostBinding("style.color") color:string="#140129"
}
