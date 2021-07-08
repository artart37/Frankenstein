import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemquantityModule } from '../../../shared/itemquantitymodule.module';
import { BasketRoutingModule, basketroute } from './basket-routing.module';


@NgModule({
  declarations: [
    basketroute
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    ItemquantityModule
  ]
})
export class BasketModule { }
