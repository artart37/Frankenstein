import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { elheader,page } from './shared/myanimations/enterleave';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ elheader, page ]

})
export class AppComponent {

  prepareRoute(goutlet: RouterOutlet) {
    return goutlet.isActivated? goutlet && goutlet.activatedRouteData:"" //&& goutlet.activatedRouteData.animation["nameoftherouteanimation"]; add this if you add data data: { animation: 'nameoftherouteanimation' in your app routing ts }
  }
//https://medium.com/@tanya/angular4-animated-route-transitions-b5b9667cd67c
}