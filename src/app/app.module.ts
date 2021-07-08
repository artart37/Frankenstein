import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
// import { ChatmoduleModule } from './chat/chatmodule.module';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { CanditableComponent } from './canditable/canditable.component';
import { HirassisttableComponent } from './hirassisttable/hirassisttable.component';
import { DateComponent } from './date/date.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { HiringassistantserviceService } from './hiringassistantservice.service'; We dont need this, since we have marked providedIn: 'root' in the service
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FirstdirectiveDirective } from './mydirectives/firstdirective.directive';
import { SeconddirectiveDirective } from './mydirectives/seconddirective.directive';
import { MythirddirectiveDirective } from './mydirectives/mythirddirective.directive';
import { MyfourthdirectiveDirective } from './mydirectives/myfourthdirective.directive';
import { AsimpchildComponent } from './asimpchild/asimpchild.component';
import { JustachildComponent } from './justachild/justachild.component';
import { AchildComponent } from './achild/achild.component';
import { ProgressspinnerComponent } from './progressspinner/progressspinner.component';
import { CustomPipe } from "./shared/customp.pipe";
import { FifthdirectiveDirective } from './mydirectives/fifthdirective.directive';
import { SixthdirectiveDirective } from './mydirectives/sixthdirective.directive';
import { SeventhDirective } from './mydirectives/seventh.directive';
import { EigthDirective } from './mydirectives/eigth.directive';
import { NinthDirective } from './mydirectives/ninth.directive';
import { TenthDirective } from './mydirectives/tenth.directive';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    routingComponents,
    CanditableComponent,
    HirassisttableComponent,
    DateComponent,
    NavbarComponent,
    SidenavComponent,
    FirstdirectiveDirective,
    SeconddirectiveDirective,
    MythirddirectiveDirective,
    MyfourthdirectiveDirective,
    AsimpchildComponent,
    JustachildComponent,
    AchildComponent,
    ProgressspinnerComponent,
    CustomPipe,
    FifthdirectiveDirective,
    SixthdirectiveDirective,
    SeventhDirective,
    EigthDirective,
    NinthDirective,
    TenthDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    //ReactiveFormsModule, Moved to the forms module. See https://stackoverflow.com/questions/43220348/cant-bind-to-formcontrol-since-it-isnt-a-known-property-of-input-angular
    // ChatmoduleModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  //providers: [HiringassistantserviceService], We dont need this, since we have marked   providedIn: 'root' in the service
  bootstrap: [AppComponent]
})
export class AppModule { }