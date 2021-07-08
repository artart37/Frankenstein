import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyformsComponent } from '../myforms.component';


const routes: Routes = [
  {
    path:"",
    component:MyformsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyformsRoutingModule { }
export const formroute = MyformsComponent
