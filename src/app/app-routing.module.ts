import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, RouterOutlet } from '@angular/router';

import { CandidateComponent } from './candidate/candidate.component';
import { HiringassistantComponent } from './hiringassistant/hiringassistant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CandidatedetailsComponent } from './candidatedetails/candidatedetails.component';
import { HomeComponent } from './home/home.component';
import { HuserComponent } from './huser/huser.component';
import { ObservablescComponent } from './observablesc/observablesc.component';
import { ContacthaComponent } from './contactha/contactha.component';
import { OverviewhaComponent } from './overviewha/overviewha.component';
import { SearchComponent } from './search/search.component';
import { JstsComponent } from './jsts/jsts.component';
import { BindingsComponent } from './bindings/bindings.component';
import { CustompreloadingService } from './custompreloading.service'

//One of the key things to know about routing configuration is that the order matters a lot.
//When the router receives an URL, it will start going through the configuration in order: starting with the first element of the configuration array.
//If it finds a match to the complete URL, it stops and instantiates the corresponding component(s).
//So in this case, if we would put the fallback configuration in the beginning of the array, every URL will match to the ** wildcard and this break routing.
const routes: Routes = [
{path: 'candidate/:userid', component: CandidatedetailsComponent},
{path: 'hiringassistants/:id', component: HuserComponent,
  children:[
  {path:"profiledetails", component:OverviewhaComponent},
  {path:"contacthiringassistant", component: ContacthaComponent}
  ]
},
{path: '', redirectTo:"/home", pathMatch:"full"}, //Other examples are pathMatch:"prefix etc." But in case of prefix this would not work because "" patha is a prefix to any path
{path: 'home', component: HomeComponent},
{path: 'candidate', component: CandidateComponent},
{path: 'hiringassistants', pathMatch:"full", component: HiringassistantComponent},
{
  path: 'forms',
  data:{decideprelprop:true},
  loadChildren: () => import('./myforms/modules/myforms.module').then(m => m.MyformsModule)
},
{
  path: 'settings',
  data:{decideprelprop:true},
  outlet: "modal",
  loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
},
{
  path: 'shopping',
  data:{shoppreloadprop:true},
  loadChildren: () => import('./shop/cart/modules/shopmodule.module').then(m => m.ShopmoduleModule)
},
{
path:"details",
outlet:"modal",
data:{shoppreloadprop:true},
loadChildren: () => import('./shop/itemdetails/modules/itemdetails.module').then(m => m.ItemdetailsModule)
},
{
path:"placeorder",
outlet:"modal",
data:{shoppreloadprop:true},
loadChildren: () => import('./shop/placeorder/modules/placeorder.module').then(m => m.PlaceorderModule)
},
{
path:"basket",
data:{shoppreloadprop:true},
loadChildren: () => import('./shop/basket/modules/basket.module').then(m => m.BasketModule)
},
{
  path: 'signin',
  outlet:"modal",
  loadChildren: () => import('./signin/signinmodule/signinmodule.module').then(m => m.SigninmoduleModule)
},
{path: 'bindings', component: BindingsComponent},
{
  path: 'chat',
  outlet:"modal",
  loadChildren: () => import('./chat/chatmodule.module').then(m => m.ChatmoduleModule)
},
{path: 'observables', component: ObservablescComponent},
{path: 'javascriptandtypescript', component: JstsComponent, },
{path: 'search', component: SearchComponent},
{ path: '404', component: PageNotFoundComponent},
{ path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: CustompreloadingService,
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HuserComponent,
                                  HomeComponent, 
                                  CandidateComponent,
                                  HiringassistantComponent,
                                  PageNotFoundComponent,
                                  CandidatedetailsComponent,
                                  ObservablescComponent,
                                  ContacthaComponent,
                                  OverviewhaComponent,
                                  SearchComponent,
                                  BindingsComponent,                            
                                  JstsComponent]