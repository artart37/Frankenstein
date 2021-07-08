import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of, Subscription, fromEvent, Subject } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, takeWhile, skipWhile, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observablesc',
  templateUrl: './observablesc.component.html',
  styleUrls: ['./observablesc.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservablescComponent implements OnInit {
//1. Example 
observable$:Observable<number>=new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();//It simply notifies the observer that the the observable is done
  }, 1000);
});
//2. OF
source:Observable<any> = of({ name: 'Brian' }, [1, 2, 3], function hello() {
  return 'Hello';
});
//output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
//3.1 Create an observable that publishes events
//Here we define our html element
btev = document.getElementsByClassName("clickevent")
//Here we create an Observable that pushes click events coming from the target - html element with classname clickevent.
eventob$:Observable<Event> = fromEvent(this.btev,"click")
//3.2 Creating an observable that pushes data through addeventlistener. Useful for search implementation.
search$:Observable<Event> =  new Observable (observer=>
//Our Observer object
  {
  const searchel = document.getElementById("search")
  if (!searchel) {//If the element is not found, pushes error to the observer. We write this logic before pushing next, because there we have searchel
    observer.error("Element not found")
    return;//So as not to subscribe to null
  }
  searchel.addEventListener("input", e=>{
    observer.next(e);//Publishes the changed value, because the first  param "input" is responsible for value change
   // If we wanted to listen only to the first changed value we would write observer.complete();. The Observer would stop publiching values after the first publication.
  })
  })
//ALTERNATIVE SIMPLE 3.2 EXAMPLE
//getelementbyId doesn't work well with angular. in case if we want to reference an html element with id we woul dneed to use angular's # referencing methods with viewchild, elementref and etc.
//search$:Observable<Event> = fromEvent<Event>(document.getElementsByClassName("search"), "input")
//Other variables
//4. SUBJECTS
subject = new Subject<number>();
//End of 4
private subscribe:Subscription;
private subscribe2:Subscription
mess: any;
constructor() { }
ngOnInit(): void {
//1.st example subscriber for the Observable example 1
this.observable$.subscribe(
  {//This is our Observer Object to which the subscriber function publishes values
    next(x) {console.log("The value is ", x);},
    error(e) {console.error('something wrong occurred: ' + e); },
    complete() {console.log("We are done");}
  }
);
//1.1 defining an Observer
const myObserver = {
  next: x => {this.mess = x},
  error: err => {this.mess = err},
  complete: () => {this.mess = "We are Done"},
};
this.observable$.subscribe(myObserver);
//1.2 Inline Observer
this.observable$.subscribe(
  x => {this.mess = x},
  err => {this.mess = err},
  () => {this.mess = "We are Done"},
);
//2.1 Subscribing
this.subscribe= this.source.subscribe(
  val => {console.log("Output of the Observable: Example 2", val)},
  null,
  ()=>{"Done"}
  );
//3.1
this.eventob$.subscribe(x=>console.log(x));
//3.2
this.subscribe2=this.search$.pipe(//The pipe method is for chaining observable operators (mao, debouncetime etc.), and the subscribe is for activating the observable and listening for emitted values
  map(e=> {return (e.target as HTMLInputElement).value}),//Map is an Observable that emits the values from the source Observable transformed by the given project function.
  debounceTime(500),//Emits a value from the source Observable only after a particular time span has passed without another source emission
  map(ev=>ev.length>2?ev:ev=null),//Checks if the number of letters is greater than 2 and only then returns it
  distinctUntilChanged(),//Compares if the value hasn't changed no value is retured
  filter(ev=> ev!==null || ev!==undefined)//We filter for subscription only those values which ar enot null or undehined, espescially taking into account the above map with if logic
 )
  .subscribe(
  searchvalue=>{console.log(searchvalue)},
  err=>{console.log(err);}
  // If we wanted to listen to the complete method - in our case after the first value changed it would stop - ()=>{console.log("Completed")}
  )
//End of 3.2
//4.Start
this.subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
this.subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
this.subject.next(1);
this.subject.next(2);
}
//End of 4
ngOnDestroy(){
//2 Unsubscribing subscription 2.1
this.subscribe.unsubscribe()
//3.2 Unsubscribing subscription 3.2
this.subscribe2.unsubscribe
}

}