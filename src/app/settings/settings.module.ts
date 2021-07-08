import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule, settingroute } from './settings-routing.module';


@NgModule({
  declarations: [
    settingroute
  ],
  imports: [
    SettingsRoutingModule,
    SharedModule
  ],
  exports: [
    settingroute
  ]
})
export class SettingsModule { }
