import { Injectable } from '@angular/core';
import { Asimparr, Obtype } from './bindings/bindings.component';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomserviceService {
asarr:Asimparr[] = [
    {name:"Bonny", lastname:"Clyde", position:"Actor"},
    {name:"Steven", lastname:"Gerard", position:"Footballist"},
    {name:"David", lastname:"Copperfield", position:"Magician"},
    {name:"Andrew", lastname:"Smith", position:"Loss Adjuster"}
]
mycobs$:Observable<Asimparr[]> = new Observable<Asimparr[]> ((subscriber)=>{
  try {
    subscriber.next(this.asarr)
    subscriber.complete()
  } catch (error) {
    subscriber.error("Something went wrong" + error)
  }

})
mysubject =new BehaviorSubject<Asimparr[]>(this.asarr)
mysubtob$ = this.mysubject.asObservable()

constructor() { }

senddata(newob:Obtype){
  this.asarr.push(newob)
  this.mysubject.next(this.asarr)
}
updserv(uarr:Asimparr[]){
  this.asarr=uarr
  this.mysubject.next(this.asarr)
}
delserv(duarr:Asimparr[]){
  this.asarr=duarr
  this.mysubject.next(this.asarr)
}

}
