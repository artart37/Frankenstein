import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFirstdirective]'
})
export class FirstdirectiveDirective {

constructor(el: ElementRef) {
    el.nativeElement.classList.add('class1fromdirective', 'classtwofromdirective')
}

}
