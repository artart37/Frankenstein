import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemdetailsComponent } from "../itemdetails.component"

const routes: Routes = [
  {path: '',
  component: ItemdetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemdetailsRoutingModule {}
export const itemdetails =[
    ItemdetailsComponent,
]
