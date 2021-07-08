import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'input[appEigth]'
})
export class EigthDirective {

constructor() { }
@HostBinding("class") class="inp";
}
