import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { CustomserviceService } from '../customservice.service';
import { Subscription, Observer, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

interface Randy {
id:number;
name?:string | null
}
export interface Obtype {//Exporting to make it available in asimpchild
  name:string,
  lastname:string,
  position:string 
}
export interface Asimparr {//Exporting to make it available in asimpchild
  name:string,
  lastname:string,
  position:string 
}
@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css'],
//  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BindingsComponent implements OnInit {
//A Simple expression for interpolation
interpol:string = "Interpolation refers to embedding expressions into marked up text. By default, interpolation uses as its delimiter the double curly braces."
//An interpolcated image
img:string= "https://p7.hiclipart.com/preview/114/903/582/green-arrow-computer-icons-clip-art-right-arrow.jpg"
//A property src binding example variable
imgsrcex:string= "https://images.prismic.io/smallexchange-com/21260cc6-c545-4571-8f59-cd96052b327e_SMFE_Site_Buttons-SMALL%403x.png?auto=compress,format"
//A binding the disabled property
booldis:boolean=false;
boolda:boolean=false;
simpboolik:boolean =false;
togforclass:boolean = false;
booldisfor2d:boolean;
//Some array
somearray:Array<any> =[
  {id:1, firstname:"David", lastname:"Luiz", status:"jobseeker"},
  {id:2, firstname:"John", lastname:"Smith", status:"jobseeker"},
  {id:3, firstname:"Java", lastname:"Script", status:"jobseeker"},
  {id:4, firstname:"Bob", lastname:"Tyler", status:"jobseeker"},
  {id:5, firstname:"Steve", lastname:"Cleveswood", status:"jobseeker"},
  {id:6, firstname:"Sam", lastname:"Tylor", status:"jobseeker"},
]
//Defining the name of this component into a tring to be input to the date component
nameoftheparentbindingcomponent:string = "app-bindings"

//Some innertext for innerHTML example
propertyTitle:string ="A simple text";
//Classes in a string
classesints:string="cinput cinputi"
//Classes in an object
classesintsob:object = {
  cobj:true,
  cobj2:false
}
//A var for style
styleop:number=25;
//another var for multiple styles
styleExpr:string="font-weight:bold; color:purple"
//An object for inline styles
styleObj:object={
  color: 'blue',
  fontWeight: 'bold'
}
//An object for styles for NgStyle
styleobforngstyle:object={}
//A simple object var carrying information about our click event
eventinfo: any;
// A var for my Example 15
mymessagefromkeyupevent:string
//The string for corresponding to the text Output emitted text from the Seconddirective.directive.ts
selectedtext:string;
//The Fontsize variable
fontisezepx:number = 16;
//Random object
randomobj:Randy = {
  id:1,
  name:'john'
}
//Example 20
anobforpush:Obtype = {
name:'John',
lastname:'Smith',
position:"Specialist"
}
//Example 21
asimparr:Asimparr[] = [
{name:"Bonny", lastname:"Clyde", position:"Actor"},
{name:"Steven", lastname:"Gerard", position:"Footballist"},
{name:"David", lastname:"Copperfield", position:"Magician"},
{name:"Andrew", lastname:"Smith", position:"Loss Adjuster"}
]
id:number;
name:string;
lastname:string;
position:string;
///////
myarr:Asimparr[];
mysubs:Subscription;
mysubs2:Subscription;
myobserver:Observer<any>;
servobservable:Observable<Asimparr[]>;
servobservable2:Observable<Asimparr[]>;
///////
valtolet:number;
optionsarr:Array<string>=[
  "lowerletters",
  "capitalletters"
]
selvalue:string = "lowerletters"
////////////////////////////////
///////exportAs///////////
backcolor:string = "yellow"
//////////// Loading the cart component which is defined within our lazy and preloaded feature module:shopmodule //////////////
@ViewChild('myContainer', { read: ViewContainerRef }) container: ViewContainerRef;
//////////// The Loader Function ///////////////
//https://angular.io/guide/dynamic-component-loader
//https://angular.io/api/core/ComponentFactoryResolver
//https://www.youtube.com/watch?v=9iIILdltWNM
//https://stackoverflow.com/questions/60971689/how-to-dynamically-lazy-load-module-without-router-angular-9
//More: https://medium.com/@MokkappsDev/manually-lazy-load-modules-and-components-in-angular-99b845104ef9
async lazyloadc() {
  const { CartComponent } = await import('../shop/cart/cart.component');
  const componentFactory = this.resolver.resolveComponentFactory(CartComponent);
  const instance = this.container.createComponent(componentFactory);
  console.log(instance);
}
constructor(private cd:ChangeDetectorRef, private observ:CustomserviceService, private resolver: ComponentFactoryResolver) { }

ngOnInit(): void {
////////////////Defining a Cold, Simple Observable///////////
  this.myobserver= {
    next:n=>{this.myarr=n},
    error:err=>{console.log(err)},
    complete:()=>{console.log("We are done dude");
    }
}
  this.mysubs = this.observ.mycobs$.subscribe(this.myobserver);
  this.servobservable = this.observ.mycobs$;
////////////////Defining a Subject Observable///////////
  this.servobservable2 = this.observ.mysubtob$
  this.mysubs.unsubscribe()
////Loding my lazy preloaded module's cart component, see above
  this.lazyloadc();
}

ngAfterViewInit() {}


// A function for Interpolation example
getVal(){
  return 2;
}
//Toggle the boolean
changeboolean(){
  this.booldis=!this.booldis
}
//toggle another boolean
changearrbool() {
this.boolda=!this.boolda
}
//toggle another boolean
changearrbools() {
  this.simpboolik=!this.simpboolik
}
//Return the variable for ngstyle
ngs(){this.styleobforngstyle={fontStyle: this.booldis? 'italic':'normal',fontWeight: this.booldis? 'bold':'normal',fontSize: this.booldis? '24px':''}}
//A function for the click event
testclickevent(e) {
this.booldis=!this.booldis;
this.booldis?this.eventinfo=e.clientX:this.eventinfo = null;
console.log(e);
}
changef(){
this.fontisezepx=Math.min(40, Math.max(8, +this.fontisezepx));
}
//Example 20
changeobfpush() {
  this.anobforpush = {
    name:"Lucas",
    lastname:"Podolski",
    position:"Footballist"
  }
}
//Example 21
add() {
var t0 = performance.now()
this.asimparr = this.asimparr.concat({name:this.name, lastname:this.lastname, position:this.position})
var t1 = performance.now()
console.log("Creating a new array took" + (t1 - t0) + " milliseconds.")
}
passob(e:any){
this.name = this.id>=0?e.name:null;
this.lastname = this.id>=0?e.lastname:null;
this.position = this.id>=0?e.position:null;
if (this.name && this.lastname && this.position) {
  this.togforclass = false
}
}
passdata() {
if (this.name && this.lastname && this.position) {
let arr:Obtype = {name:this.name, lastname:this.lastname, position:this.position}
this.observ.senddata(arr)
this.clearfields();
} else {
this.togforclass = true
}
}
clearfields() {
this.id = undefined
this.name = "",
this.lastname = "",
this.position =""
}
updatedata(){
if (this.name && this.lastname && this.position) {
let uparr:Asimparr[]
//Take is useless here, no idea why have implemented here
this.mysubs2 = this.observ.mysubtob$.pipe(take(1)).subscribe(
  x=>{x[this.id] = {name:this.name, lastname:this.lastname, position:this.position}; uparr =x;},
  err=>console.log(err),
  ()=>{console.log("Done!");
  }
);
this.mysubs2.unsubscribe();
this.observ.updserv(uparr);
}
else{
this.togforclass = true
}
}
delete(){
if (this.name && this.lastname && this.position) {
var darr:Asimparr[]
//Take is useless here, no idea why have implemented here
this.mysubs2 = this.observ.mysubtob$.pipe(take(1)).subscribe(
  x=>{x.splice(this.id,1); darr=x},
  
  err=>console.log(err),
  ()=>{"Done!"}
);
this.mysubs2.unsubscribe();
this.observ.delserv(darr);
this.clearfields();
}
else{
this.togforclass = true
}
}







}