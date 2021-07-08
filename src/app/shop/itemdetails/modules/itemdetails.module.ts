import { NgModule } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";
import { ItemquantityModule } from '../../../shared/itemquantitymodule.module';
import {ItemdetailsRoutingModule, itemdetails} from "../modules/itemdetails-routing.module";





@NgModule({
  declarations: [
    itemdetails
  ],
  imports: [
    ItemdetailsRoutingModule,
    SharedModule,
    ItemquantityModule
  ]
})
export class ItemdetailsModule { }
