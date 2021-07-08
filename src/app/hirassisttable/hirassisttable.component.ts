import { Component, OnInit, ContentChild, AfterContentInit, ElementRef, ContentChildren, QueryList} from '@angular/core';
import { DateComponent } from '../date/date.component';
import { HiringassistantserviceService } from '../hiringassistantservice.service';

export interface Hiringassistants{
  hirid:number;
  hiringassistantname:string;
  areaofexpertise:string
}

@Component({
  selector: 'app-hirassisttable',
  templateUrl: './hirassisttable.component.html',
  styleUrls: ['./hirassisttable.component.css']
})
export class HirassisttableComponent implements OnInit, AfterContentInit {
hiringassistants:Hiringassistants[] = [
    {hirid: Math.round(Math.random() * 112), hiringassistantname: "Stevie Wonder", areaofexpertise:"Insurance"},
    {hirid: Math.round(Math.random() * 112), hiringassistantname: "Bob Dylan", areaofexpertise:"Music"},
    {hirid: Math.round(Math.random() * 112), hiringassistantname: "Volodemort Vandeyk", areaofexpertise:"Cinema"},
    {hirid: Math.round(Math.random() * 112), hiringassistantname: "Lucas Santros", areaofexpertise:"Logistics"},
    {hirid: Math.round(Math.random() * 112), hiringassistantname: "Johny Depp", areaofexpertise:"Sales"}, 
]
//ContentChild works  only with ngAfterConentInit or ngAfterContenChecked
@ContentChild(DateComponent) datechild:DateComponent;
@ContentChild("bbc") bbcc:ElementRef
@ContentChildren(DateComponent, {read: DateComponent, descendants:true }) datechildren:QueryList<DateComponent>
constructor(private hireservice:HiringassistantserviceService) { }

ngOnInit(): void {}
ngAfterContentInit() {
//Changing the color of the projected h2 text by accessing contentchild
 setInterval(()=>{
  var hour = parseInt(this.datechild.realdate.getHours()+ "" + Math.floor(Math.random()*10))
  var rhour = hour>255?Math.floor(hour/2.5):hour<10?parseInt("0"+hour):hour
  var min = parseInt(this.datechild.realdate.getMinutes()+""+Math.floor(Math.random()*10))
  var rmin = min>255?Math.floor(min/2.5):min<10?parseInt("0"+min):min
  var sec = parseInt(this.datechild.realdate.getSeconds()+""+Math.floor(Math.random()*10))
  var rsec = sec>255?Math.floor(sec/2.5):sec>10?sec:parseInt("0"+sec)
  var newd = "rgb("+ rhour + "," + rmin + "," + rsec +")"
  this.bbcc.nativeElement.querySelector('h2').style.color=newd
},1000
)
//ContentChildren goes here
this.datechildren.toArray().forEach((element)=>console.log(element.realdate));
    // console.log(this.bbcc);
    // console.log(this.datechild.realdate);
    // console.log(this.bbcc.nativeElement.firstChild.innerText);
    //SOME EXAMPLES OF SETTING CLASSES and STYLES TO THE PROJECTED CONTENT
      //this.bbcc.nativeElement.querySelector('h2').classList.add('someclass')
      //this.bbcc.nativeElement.querySelector('h2').className="someclass";
      //   var select = document.getElementsByClassName('someclass') as HTMLCollectionOf<HTMLElement>
      //   for (var i = 0, il = select.length; i < il; i++) {
      //     select[i].style.color = "#12345f"
      // }
  }
sendData(hiringassistants:Array<any>){
    this.hireservice.sendMessage(hiringassistants)
  }
}
