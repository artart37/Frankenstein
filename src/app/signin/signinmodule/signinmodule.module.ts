import { NgModule } from '@angular/core';
import { SigninmoduleRoutingModule, signroute } from './signinmodule-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
     signroute
  ],
  imports: [
    SigninmoduleRoutingModule,
    SharedModule
  ],
exports: [
    signroute,
]
})
export class SigninmoduleModule { }
