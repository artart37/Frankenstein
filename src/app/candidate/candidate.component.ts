import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, ChangeDetectorRef, ViewChildren, QueryList, AfterContentInit, OnChanges, SimpleChanges} from '@angular/core';
import { CanditableComponent } from '../canditable/canditable.component';
// import { Router } from '@angular/router';
export interface Candidateusers{
  userid:number
  name:string
}
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, OnChanges {
toggle:boolean=true;
atoggle:boolean=true;
color:string = "Color";
candidateusers: Candidateusers[] = [
    {userid: Math.round(Math.random() * 112), name:"Peter Chech"},
    {userid: Math.round(Math.random() * 112), name:"Robbie Williams"},
    {userid: Math.round(Math.random() * 112), name:"Steve Jobs"},
    {userid: Math.round(Math.random() * 112), name:"John Smith"},
    {userid: Math.round(Math.random() * 112), name:"Bryan Adams"}
  ]
  message:string;
  textforpipe:string;
  inname:any;
  inuserid:any;
  inunid:any;
  idxxo:number;
  innameo:any;
  inuserido:any;
  inunido:any;
  vchldrmsg:string;
  vcnmsg:string;
  tst:string;
  @ViewChild('nameRef', {static: false}) namelementref:ElementRef;// Works inside ngAfterViewInit or ngAfterViewChecked hook
  @ViewChild('useridref', {static: false}) useridrefi:ElementRef;
  @ViewChild(CanditableComponent, {static:false}) tablerefi:CanditableComponent;
  @ViewChildren(CanditableComponent) viewchildrenref: QueryList<CanditableComponent>
  constructor(private changedetect: ChangeDetectorRef) { }  // private router: Router
  
 ngOnInit(): void {
   console.log("NG ONINIT");
 }
ngOnChanges(changes: SimpleChanges){
console.log("Ng Changes" +  changes);
}
 ngAfterContentInit(){
  // console.log(this.contenchildi)
}

  ngAfterViewInit(){
    // this.namelementref.nativeElement.focus();
    this.namelementref.nativeElement = "Some placeholder";
    this.inname = this.namelementref.nativeElement;
    this.useridrefi.nativeElement.style.background="rgb(204, 202, 239)"
    // this.viewchildrenref.toArray().forEach((element, index)=>{//the 1st param is an optional name for an array element, and the second is an opt name for the comp array index,
    // //foeach may take three params, the second param is alway sthe index
    // // console.log(element.candi[index].name);
    // // console.log(index+1)
    // this.vchldrmsg = "You have used a child component " + (index+1) + " times";
    // // console.log(element.candi[index].name==this.innameo?this.vcnmsg="True":this.vcnmsg ="False");
    //    }
    // );
    // // detecetchange is for checking the VIEW for changes in order to prevent errors in iafter view in it
   this.changedetect.detectChanges()
  }
ngAfterViewChecked(){ }

togglewelcometext() {this.toggle=!this.toggle;}
atogglewelcometext() {this.atoggle=!this.atoggle;}

  refreshdata(){
    this.candidateusers = [
      {userid: Math.round(Math.random() * 112), name:"Peter Chech"},
      {userid: Math.round(Math.random() * 112), name:"Robbie Williams"},
      {userid: Math.round(Math.random() * 112), name:"Steve Jobs"},
      {userid: Math.round(Math.random() * 112), name:"John Smith"},
      {userid: Math.round(Math.random() * 112), name:"Bryan Adams"},
      {userid: Math.round(Math.random() * 112), name:"John Johns"}
    ]
  }
  greet(childname:string){alert("Hello " + childname);}
functionfordynamicallyretrievingdatafromethedomviaviewchildren(){
  this.viewchildrenref.toArray().forEach((element, index, array)=>{
    if(element.fullname!==undefined && element.fullname !== this.innameo){
      this.idxxo = element.idxx
      this.innameo = element.fullname;
      this.inuserido = element.useridnumber;
      this.inunido = element.uniqueid;
      array[index].selectuser(array[index].idxx,array[index].candi);
    }
  }
)
};
changename(){
  this.candidateusers[this.idxxo?this.idxxo:0].name = this.innameo
}
changeUserid(){
  this.candidateusers[this.idxxo?this.idxxo:0].userid = this.inuserido;
  this.inunido=this.idxxo+1 +""+this.inuserido;
};
changeunin(){
  if ((1+this.idxxo).toString()==this.inunido.toString().slice(0,this.idxxo.toString().length)) {
    this.candidateusers[this.idxxo?this.idxxo:0].userid = this.inunido.toString().slice(this.idxxo.toString().length)
    this.inuserido = this.candidateusers[this.idxxo?this.idxxo:0].userid
}
  else{
     this.candidateusers[this.idxxo?this.idxxo:0].userid = this.inunido
     this.inuserido = this.candidateusers[this.idxxo?this.idxxo:0].userid
     this.inunido = this.idxxo+1 +""+this.candidateusers[this.idxxo?this.idxxo:0].userid.toString()
   }
}
callviech(){this.tablerefi.viewchmethodf()}
updateselect(){
  // this.idxxo = this.tablerefi.idxx
  // this.innameo = this.tablerefi.fullname;
  // this.inuserido = this.tablerefi.useridnumber;
  // this.inunido = this.tablerefi.uniqueid;
  // Because we have several instances of ChannelSplitterNode, we will use viewchildrenmethod to reference child Elements. MADE IT AFTER SEVERAL DAYS OF EXPERIMENTS
  this.functionfordynamicallyretrievingdatafromethedomviaviewchildren();
//BELOW ARE SOME OF THE OPTIONS I HAD BEEN PLAYING WITH
//OPTION1
// this.viewchildrenref.toArray().forEach((element, index, array)=>{//the 1st param is an optional name for an array element, and the second is an opt name for the comp array index,
//   if(element.fullname!==undefined && element.fullname != this.innameo){
//     this.innameo = element.fullname
//     console.log(index + 1 + " " + element.fullname+ " " + this.innameo + " ")
//   }
// });
//OPTION3
  //  for (let index = 0; index < this.viewchildrenref.toArray().length; index++) {
  //     let arr = this.viewchildrenref.toArray()
  //     if(arr[index].fullname!==undefined && arr[index].fullname!== this.innameo){
  //     while(this.innameo !== arr[index].fullname) {
  //       this.innameo = arr[index].fullname
  //     }
  //   }}
}
// gotocandipage(candi){
// this.router.navigate(['/candidate', candi.userid]);
// }
 }