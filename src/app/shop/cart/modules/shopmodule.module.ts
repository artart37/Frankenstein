import { NgModule } from '@angular/core';
import { ShopmoduleRoutingModule, shop} from "../modules/shopmodule-routing.module";
import { SharedModule } from "../../../shared/shared.module";
import { ItemquantityModule } from '../../../shared/itemquantitymodule.module';


@NgModule({
  declarations: [
    shop,
  ],
  imports: [
    ShopmoduleRoutingModule,
    SharedModule,
    ItemquantityModule
  ],
  // exports: [
    
  // ]
})
export class ShopmoduleModule { }
