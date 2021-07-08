import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from "../cart.component"

const routes: Routes = [
  {path: '',
  component: CartComponent,
  },
//Had we wanted to have an auxiliary route as a child to a lazy loaded component, we had to provide a path, e.g. ert, because if
// it was empty, it wouldn't work. The same would apply to a non-auxilliary component.
  // {path: 'ert',
  // component: CartComponent,
  //   children:[{
  //     path:"details",
  //     outlet:"modal",
  //     component: ItemdetailsComponent,
  //     }
  //   ]
  // },

];
//https://stackblitz.com/edit/angular-9ghbtn?file=app%2Fmodule1%2Fhome1%2Fhome1.component.ts
//https://stackblitz.com/edit/shiva-auxiliary-routes?file=src%2Fapp%2Fapp-routing.module.ts
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopmoduleRoutingModule {}
export const shop =[
  CartComponent,
]
