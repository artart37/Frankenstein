import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CustomserviceService } from '../customservice.service';
import { Obtype, Asimparr } from '../bindings/bindings.component';
import { Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-asimpchild',
  templateUrl: './asimpchild.component.html',
  styleUrls: ['./asimpchild.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsimpchildComponent implements OnInit,OnChanges {
@Input() obfpush:Obtype;
@Input() boold:boolean;
@Input() booldo:boolean;
@Input() simpboolo:boolean;
@Input() arrforpush:Asimparr;
@Output() ido:EventEmitter<number>=new EventEmitter;
@Output() user:EventEmitter<object>=new EventEmitter;
myobarr:Asimparr[];
myobsubscription:Subscription;

constructor(private cd:ChangeDetectorRef, private servarr:CustomserviceService) { }

ngOnInit(): void {}

ngOnChanges(scd:SimpleChanges){
   if (this.simpboolo && scd.simpboolo && scd.simpboolo.currentValue) {
    this.myobsubscription = this.servarr.mycobs$.subscribe(
      x=>{this.myobarr=x},
      err => {console.error(err)},
      () => {console.log("We are Done")},
    );
   }
   else if(this.myobsubscription) {
    this.myobsubscription?.unsubscribe()
    console.log("Unsubscribed is: " + this.myobsubscription?.closed);
  }
console.log("Fired");
}

  gettherowdata(idv:number, user){
    this.ido.emit(idv),
    this.user.emit(user)
  }
  trackbyID(index:number, user:any){
    return index ? index : Number;
  }


}