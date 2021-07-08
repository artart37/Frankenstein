import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';//Learn more about HTTP at https://www.youtube.com/watch?v=W9ZhQ_0z6Kg
import { throwError as observableThrowError, Observable, Subject, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Hiringassistants } from './hirassisttable/hirassisttable.component';
@Injectable({//Tells angular that this service might itself have incted dependencies https://www.youtube.com/watch?v=69VeYoKzL6I&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=19 7:00
  providedIn: 'root'
})
export class HiringassistantserviceService {
myapikey = "a2e5dc750f9141559bb833ebb325f8c5"
//Subjects have the extra ability of emitting values.
//BehaviorSubject has an initial value which will be emitted when subscribed to.
//BehaviourSubject class is special type of subject that remembers the last value emitted by the subject or the initial value in case if no value was emitted yet.
private messagec = new BehaviorSubject<Array<any>>([])
messageco$ = this.messagec.asObservable();
constructor(private http: HttpClient) { }
gethiringassistants():Hiringassistants[]{
   return [
      {hirid: Math.round(Math.random() * 112), hiringassistantname: "Stevie Wonder", areaofexpertise:"Insurance"},
      {hirid: Math.round(Math.random() * 112), hiringassistantname: "Bob Dylan", areaofexpertise:"Music"},
      {hirid: Math.round(Math.random() * 112), hiringassistantname: "Volodemort Vandeyk", areaofexpertise:"Cinema"},
      {hirid: Math.round(Math.random() * 112), hiringassistantname: "Lucas Santros", areaofexpertise:"Logistics"},
      {hirid: Math.round(Math.random() * 112), hiringassistantname: "Johny Depp", areaofexpertise:"Sales"},
  ]
}
//Because we get an observable of an unknown type here, i haven't defined the type. In other cases we need to define the type. See more at https://www.youtube.com/watch?v=LmIsbzt-S_E&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=21
//The catchError operator is p iped to the observable, takes a method name as an argument. We are essentaially catching a possible exception on the observable.
// Without catching the error we would have just a blank screen which is poor user experience.
getdatafromaserver(): Observable<any>{
  return this.http.get<any>("http://newsapi.org/v2/top-headlines?country=gb&apiKey=" + this.myapikey).pipe(
  catchError (this.errorHandler));
}
// The errorHandler throws out the error message so that any component that has subscribed to the observable could make use of it and display it in the view.
errorHandler(error: HttpErrorResponse){
  return observableThrowError(error.message || "Server Error")
}
sendMessage(harray:Array<any>){
this.messagec.next(harray);//Through the next method we are emitting the new value of the subject.
//Read more about observables at https://rxjs-dev.firebaseapp.com/guide/observable.
//We could indeed use several nexts here, but I preferred defining an array in hiringassistant.
}
}