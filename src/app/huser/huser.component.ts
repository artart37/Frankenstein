import { Component, OnInit, AfterViewInit} from '@angular/core';
import { HiringassistantserviceService } from '../hiringassistantservice.service';
import { Observable, timer, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-huser',
  templateUrl: './huser.component.html',
  styleUrls: ['./huser.component.css']
})
export class HuserComponent implements OnInit, AfterViewInit {
messageh:Array<any>;
hiringassistservice = []
everysecond:Observable<number> = timer(0,1000)
everyminute:Observable<number> = timer(0,60000)
time = new Observable<string>(observer => {
  setInterval(() => observer.next(new Date().toString()), 1000);
});
private thisexone:Subscription;
private thissextwo:Subscription;
routeparam: number;
constructor(private hireservice:HiringassistantserviceService, private route: ActivatedRoute, private router:Router) {
this.thissextwo = new Subscription() //To make angular know its a new subscription: https://stackoverflow.com/questions/54668110/cannot-read-property-add-rxjs-subscription
}
  ngOnInit(): void {
    this.hiringassistservice=this.hireservice.gethiringassistants()
    // //EXPERIMENTS WITH OBSERVABLES
    // //1.We subscribe to the timer in ngOnInit method of a component and call console.log every time timer emits a new value.
    // this.thisexone = this.everysecond.subscribe(second=>console.log(second))
    // //2. When we have multiple subscriptions
    // this.thissextwo.add(this.everysecond.subscribe(second=>console.log("Adding Second", second)))
    // this.thissextwo.add(this.everyminute.subscribe(minute=>console.log("Adding Minute", minute)))
    // //4. Takeing the first 5 instances of the everysecond observable. We dont need an unsubscribe method here. 3. Takeuntil is another method but is not recommeneded.
    // this.everysecond.pipe(take(5)).subscribe(second=>console.log("Take", second))
    //Here, if a user somehow accesses the huser without clicking a table row, the messageh would be empty. We therefore have used ngif in the huser html.
  //An alternative way of doing this would be
  //  if(nextvalue!==undefined && nextvalue.length !== 0){
  //     this.id = nextvalue[0]
  //     this.hirid = nextvalue[1].hirid
  //     this.nameofhirer = nextvalue[1].hiringassistantname
  //     this.areaofexpertise = nextvalue[1].areaofexpertise
  //     }
  //=============================================================================================================================
  this.hireservice.messageco$.pipe(take(1)).subscribe(nextvalue=> {//To avoid BehaviourSubject firing several times we use take 1 here.
        this.messageh = nextvalue
      }
  )
  //The nextvalue is in fact emitted and evaluated only after a user clicks the table row, because only then the array passes to the huser. That si why, when a user doesn't click a row and we are
  // in a particular user page, say.../1 and refresh the page the messageh gets lost and the length is equal to 0. Because the data for the users data is recived from a service
  // through the gethiringassistants() in the service, in such cases we connect to that data via this beautiful line of code. We could have done it even shorter - connecting directly to the
  // data in the service - this.hireservice.gethiringassistants().
  // The below line of code is only if we want the data in the huser to stay even after refresh. It simply reads the url param - "id", passes to the array this.messageh the way you can see in the
  // huser html, and if the user hasn't clicked the button in the hiringassistant html table and the hiringassistservice hasn't passed to here (the array length is 0), then it makes the
  // messageh array equal to the array (data) defined directly in the service (this.hireservice.gethiringassistants() or it could be  this.hiringassistservice as we had made it equal to the return value of 
  // this.hireservice.gethiringassistants())
  if (this.messageh.length==0){this.messageh=this.hireservice.gethiringassistants()}
  //=================================================================================
 //Accessing the optional parametres of the route.
  this.route.paramMap
     .subscribe((params:ParamMap) => {
     let id  = +params.get("id");// +sign is for converting the string to a number (a js command)
     //We check what parametres are in place. This is becasue angular doesn't know what the "id" parametre in the parametre can and cant be. 
      if(id > this.messageh.length || id < 1 || isNaN(id)){this.router.navigate(['404'], { queryParamsHandling: 'preserve' });}
      else{this.routeparam = id}
     }
   )
 }
ngOnDestroy(){
// //1.Destryong the subscription in the example one
// this.thisexone.unsubscribe()
// //2.Destroying our multiple subscriptions. We coul d use the same thisexone variable 
// this.thissextwo.unsubscribe()
}
ngAfterViewInit(){};

goprevious(){
let previousrouteid:Number
this.routeparam -1>0?previousrouteid = this.routeparam -1:previousrouteid = 1
this.router.navigate(['/hiringassistants', previousrouteid]);//Here, again we are passing an optional parametre equivalent to the id in the app routing ts
}
gonext(){
let nextrouteid:Number  
this.routeparam +1<this.messageh.length?nextrouteid = this.routeparam +1:nextrouteid =this.messageh.length
this.router.navigate(['/hiringassistants', nextrouteid]);//Here, again we are passing an optional parametre equivalent to the id in the app routing ts
}
//Read more about relative navigation and other navigation extras at https://angular.io/api/router/NavigationExtras and https://www.youtube.com/watch?v=qktmk-7Kot8&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=28
backPage(){
this.router.navigate(["../"], {relativeTo: this.route})
}
//The Function for navigating to the child route
showOverview(){
  this.router.navigate(['profiledetails'],{relativeTo:this.route})
}
contactHirassistant(){
  this.router.navigate(['contacthiringassistant'],{relativeTo:this.route})
}
gotoSearch() {
  this.router.navigate(["/search"], {relativeTo:this.route, queryParams: { searchresult: "queryparam"}})//No need for the =  sign, angular addsit before the param
}
}