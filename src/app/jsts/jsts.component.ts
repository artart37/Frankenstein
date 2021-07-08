import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';

export interface Fruits {
fruit:string;
color:string;
}
@Component({
  selector: 'app-jsts',
  templateUrl: './jsts.component.html',
  styleUrls: ['./jsts.component.css']
})
export class JstsComponent implements OnInit, OnChanges {
//Example 1,2
 person:any = {
    firstName: "John",
    lastName : "Doe",
    country : "Namibia",
    get fulldetails() {
      return this.firstName + " " + this.lastName +  " " + "from" + " " + this.country;
    },
    set setfulldetails(setvalue){
     this.firstName = setvalue
    }
  };
// Example 3
get ex3getter(){
  return this.person.fulldetails
}
//Example 4
set ex4setter(set4value){
  this.person.lastName = set4value
}
//For Example 1,2,3,4
clickf(){
  this.person.setfulldetails = "Johny The Great"
  this.ex4setter = "Doey The Great"  
}
//Example 5
selectedvalue:string;
demoarr:Fruits[] = [
  {fruit: "Apple", color:"Red"},
  {fruit: "Grape", color:"Green"},
  {fruit: "Mango", color:"Yellow"},
]
colors:string;
//Example 5
switchdet(){
  switch (this.selectedvalue) {
  case "Apple":
      this.colors = this.demoarr[0].color
      break;
  case "Grape":
    this.colors = this.demoarr[1].color
      break;
  case "Mango":
    this.colors = this.demoarr[2].color
      break;
  default:
    this.colors = "No fruits selected!"
      break;    
};
}
//Example 6
deletefruit(){
  console.log(this.demoarr);
  delete this.demoarr[0]
  console.log(this.demoarr);
  
}
deletecolor(){
  delete this.demoarr[0]?.color
}
constructor(private cd:ChangeDetectorRef) { }

ngOnInit(): void { };
ngOnChanges(){ }

}