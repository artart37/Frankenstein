import { Component, OnInit} from '@angular/core';
import { HiringassistantserviceService } from '../hiringassistantservice.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { elng } from '../shared/myanimations/enterleave';


@Component({
  selector: 'app-hiringassistant',
  templateUrl: './hiringassistant.component.html',
  styleUrls: ['./hiringassistant.component.css'],
  animations: [ elng ]
})
export class HiringassistantComponent implements OnInit {
stringforpipe:string="Some string for pipe."
objforpipe = {
  agent: "John smith",
  idnumber: Math.round(Math.random())
}
numberforpipe:number= 5.364;
numberforpercentpipe:number = 0.768;
numberforcurrencytpipe:number = 0.25;
dateforpipes:Date =new Date()
hiringassistservice = []
newsapidata=[]
errorMsg:any
sub:Subscription
constructor(private hireservice:HiringassistantserviceService, private router:Router, private route: ActivatedRoute) { }// Inject a dependency through a local variable which is an instance of the HiringassistantserviceService service
ngOnInit(): void {
  //This is for the observable read from service file
  this.hiringassistservice = this.hireservice.gethiringassistants()
 //The newsdata of the particular API is returned as an observable object. We only take the article array of it, because we dont need the rest. Do newsdata to view the json data.
  this.sub  = this.hireservice.getdatafromaserver()//The observable has three methods: next(), error(), complete() https://www.youtube.com/watch?v=Tux1nhBPl_w
    .subscribe(newsdata => {this.newsapidata = newsdata['articles']},//Through the subscribe method we observe the obervable. Here the newsdata variable is for the next method, the error is for error
               error=>{this.errorMsg = error; console.log(this.errorMsg)},
               () => console.log("Complete message")
    );
    //Some components (eg AppComponent) and most of the services (with exception of services from lazy loaded modules and services provided in @Component decorator) in our Angular application will be instantiated only once during the application startup.
    //If we know that we’re dealing with such a case it is OK to subscribe to an Observable without providing any unsubscription logic.
    //https://medium.com/angular-in-depth/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
    // Eventually, these subscriptions will get cleaned up when we navigate away from application to some other website. THIS IS OUR CASE HERE. BUT FOR THE SAKE OF DEMONSTRATION WE WILL IMPLEMENT IT BELOW.
}
ngOnDestroy() {
  this.sub.unsubscribe()
}
// This functions takes the hirs Object argument and idxhs Number from the clikced object which can be found in the huser html and passess it to the sendMessage method of the Service.
// Because we cn onlt emitt one argument via the next function in the service, we merge these tow arguments into one array ttar and pass this to the sendMessage function. We then access this array 
// in the huser ts while subscribing to it.
sendData(hiringassistservice:Array<any>){
this.hireservice.sendMessage(hiringassistservice)
}
//https://blog.angular-university.io/angular2-router/, https://alligator.io/angular/query-parameters/, https://angular.io/guide/router
routetodetails(idxhs) {
  this.router.navigate(['/hiringassistants', idxhs+1], { queryParamsHandling: 'preserve' });
}
//Read more about relative navigation and other navigation extras at https://angular.io/api/router/NavigationExtras and https://www.youtube.com/watch?v=qktmk-7Kot8&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=28
relativeNav(idxhs){
  this.router.navigate([idxhs+1], { relativeTo: this.route });
}

}