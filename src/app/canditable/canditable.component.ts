import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { Candidateusers } from '../candidate/candidate.component';

@Component({
  selector: 'app-canditable',
  templateUrl: './canditable.component.html',
  styleUrls: ['./canditable.component.css']
})
export class CanditableComponent implements OnInit, OnChanges {
@Input() candi:Candidateusers;
@Output() updateselectref = new EventEmitter
@Output() toggles = new EventEmitter
@Output() childevent = new EventEmitter
@Output() greetevent = new EventEmitter
@Output() sendcandidate =new EventEmitter
@ViewChild('getid', {static:false}) getidx:ElementRef
objforparentinput:object;
idxx:number;
fullname:any;
useridnumber:any;
uniqueid:any;
childname:string;

constructor(private changedetect: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.childname=this.candi[0].name
    this.sendcandidate.emit("Simple text output from a child");
    };
    ngOnChanges(changes: SimpleChanges){//Tracks changes in InPut. In this case its candi.
      console.log(changes);
  }

  callParentGreet(){this.greetevent.emit(this.childname);}
  fireEvent(){this.childevent.emit("Hi. I am a data from the child (canditable)");}
   // Moved from candidate component This is the function for trackby inside ngfor for tracking based upon index to update only new data and not the whole list. So if the set of indexes have changed, it will be updated only for the changed one, based upon the index.
 trackbyID(index:number, candies:any){
   return index? index : Number;
  }

selectuser(idx, candies)
{
this.idxx=idx
this.fullname = candies.name;
this.useridnumber = candies.userid;
this.uniqueid = parseInt(idx+1 + '' +candies.userid);
this.updateselectref.emit();
}
viewchmethodf(){
  alert("Hello " + this.candi[0].name)
}
}