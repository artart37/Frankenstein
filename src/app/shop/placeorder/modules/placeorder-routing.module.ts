import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceorderComponent } from "../placeorder.component"


const routes: Routes = [
  {
    path:"",
    component:PlaceorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceorderRoutingModule { }
export const placeorderroute = [
  PlaceorderComponent
]