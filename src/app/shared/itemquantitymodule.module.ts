import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms'; We dont need this since we dont implement any form related ng
import { ItemquantityComponent } from '../shop/itemquantity/itemquantity.component';
import { ValidateQuantity } from "./validatequantity.pipe";
import { DefinpDirective } from '../mydirectives/definp.directive';


@NgModule({
//   imports:[
//  //   FormsModule,
//   ],
  declarations: [
    ItemquantityComponent,
    ValidateQuantity,
    DefinpDirective,
  ],
  exports:[
    ItemquantityComponent,
    ValidateQuantity,
    DefinpDirective
  ]
})
export class ItemquantityModule { }
