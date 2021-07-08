import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-childforchat',
  templateUrl: './childforchat.component.html',
  styleUrls: ['./childforchat.component.css']
})
export class ChildforchatComponent implements OnInit, OnDestroy {
  datevar:Date =  new Date();
  datefunction:any
  timerob:Observable<number> = timer(0,1000);
  constructor() { }
  ngOnInit(): void {
    setInterval(this.datefunction=()=>{
      this.datevar =  new Date();}, 100
    )
  }
ngOnDestroy(){
  clearInterval(this.datefunction())
}

}
