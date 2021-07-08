import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from '../chat/chat.component';
import { ChildforchatComponent } from '../childforchat/childforchat.component';
import { TestguardGuard } from '../guards/testguard.guard';
import { AchildguardGuard } from '../guards/achildguard.guard';

const routes: Routes = [
  {
    path: '',
    component:ChatComponent,
    canActivate:[TestguardGuard],
    canActivateChild:[AchildguardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChatwithrouteRoutingModule { }
export const routemodal = [
  ChatComponent,
  ChildforchatComponent,
]
