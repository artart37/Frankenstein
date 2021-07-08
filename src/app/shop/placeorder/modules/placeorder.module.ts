import { NgModule } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";
import { PlaceorderRoutingModule, placeorderroute } from './placeorder-routing.module';


@NgModule({
  declarations: [
    placeorderroute,
  ],
  imports: [
    PlaceorderRoutingModule,
    SharedModule
  ]
})
export class PlaceorderModule { }
