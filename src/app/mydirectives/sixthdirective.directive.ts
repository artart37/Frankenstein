import { Directive, HostBinding, } from '@angular/core';

@Directive({
  selector: 'a:not([routerLink])'
})
export class SixthdirectiveDirective {

constructor() {}
@HostBinding("rel") rel = "noopener";//Alternative @HostBinding("attr.rel") rel = "noopener";
@HostBinding("target") target = "_blank";//Alternative @HostBinding("attr.target") target = "_blank";

}
