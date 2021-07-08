import { NgModule } from '@angular/core';
import { ChatwithrouteRoutingModule, routemodal } from './chatwithroute-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    routemodal,
  ],
  imports: [
    ChatwithrouteRoutingModule,
    SharedModule
  ],
  exports: [
    routemodal,
  ]
})
export class ChatmoduleModule { }
