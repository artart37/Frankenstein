import { Directive, ElementRef, EventEmitter, HostListener,Input,OnInit,Output,Renderer2} from '@angular/core';
import { JustaservService } from '../justaserv.service';

@Directive({
  selector: '[defzero]',
  exportAs: 'newvalue'
})
export class DefinpDirective implements OnInit {
@Input() spbool:boolean;
@Output() spboolChange:EventEmitter<boolean>= new EventEmitter();
@Input() availability:number;
@Input() shabadaba:string;
@Input() grandparent:string;
@Input() i:number;
@Output() shabadabaChange:EventEmitter<string>= new EventEmitter();
//Quantity with an initial input DOM value. This has several instances for each itemdquantity component as the directive is attached to each looped inpuy.
y:number;
//Problem arose after deleting items from the basket - the quantity wasn't being updated, probably because the quantity property (y in the directive) for
// the particular item was not updated, remaining the deleted item's value. That is why I am getting the addtobasket array of added items returned by the updatedquantitygetter getter and get the quantity.
//I have wrapped this within an another getter for ease of reference, reading, making it more tidy.
get upquant(){
  if (this.products.updatedquantitygetter) {
    return this.products.updatedquantitygetter[this.i]?.quantity   
  } else {
    return null
  }
}
  constructor(private renderer:Renderer2, private el:ElementRef, private products:JustaservService) { }

@HostListener("focusout", ["$event.target.value"]) setdefault(e:any) {
if (this.upquant === undefined || this.upquant === null) {
    if (e.length<1||parseInt(e)<1) {//Checks if the input string (always returns string) is empty or whether the numeric data is less than 1
    this.availability!=0?this.y=1:this.y=0 //If our stock is not empty (the available quantity is not 0), in that case we assign 1 to y
  } else if (isNaN(e)){//Check whether it is numeric, if not, 1 is assigned to y
  this.y=1
  } else if (parseInt(e)>this.availability){//Check if the order is more than available
    this.y=this.availability
    this.shabadabaChange.emit(this.shabadaba=="shakestate"?"normal":"shakestate")
  }else{//Otherwise, we assign the input number to y
    this.y=parseInt(e)
  }
} else {
  this.y=this.upquant
}




//We assign the y property to the element 
this.renderer.setProperty(this.el.nativeElement,"value", this.y); //This does the trick
//this.renderer.setAttribute(this.el.nativeElement,"value", this.y.toString())
//this.renderer.setAttribute(this.el.nativeElement,"ng-reflect-model", this.y.toString())
//this.updatedv.emit(this.y)
//So, in HTML, attributes are defined on HTML elements and are supposed to be the initial values passed to them at the time of creating those elements.
//Once the browser creates the DOM (a.k.a. after rendering the page), the HTML elements become objects (node objects) and hence, they have properties.
//Therefore, in order to change the current value of the input element using Renderer2 of angular, you need to use the setProperty method.
//If you use, the setAttribute method, it will change the value only once, that is when you are creating the element. It will not change the current value.
//https://stackoverflow.com/questions/57213371/what-is-the-difference-between-an-attribute-and-a-property-in-html#:~:text=Therefore%2C%20in%20order%20to%20change,not%20change%20the%20current%20value.
//Updating quantity
this.quantityupdater();
};

inc(){
this.assbupquant();
if (this.y<this.availability) {
    this.renderer.setProperty(this.el.nativeElement,"value", ++this.y)
      //Passing updated quantity
      this.quantityupdater();
  } else {
    this.spboolChange.emit(true)
    this.shabadabaChange.emit(this.shabadaba=="shakestate"?"normal":"shakestate")
  }
}
dec(){
  this.assbupquant();
  this.spboolChange.emit(this.availability<=5?true:this.spbool=false)
    if(this.y>1) {
      this.renderer.setProperty(this.el.nativeElement,"value", --this.y);
      //Passing updated quantity
      this.quantityupdater();
    };
  }

//Checking if the app-itemmquantity component is the child of basket component, and if so, updating the custom array's quantity through the service
quantityupdater(){
  if (this.grandparent == "basketcomponent") {
    this.products.updatatedquantity(this.i,this.y)
  };
}
//Checking if the basket's added product's array is available, assigning the directive's quantity property to the array's quantity property through getters, described above.
assbupquant(){
  this.upquant?this.y=this.upquant:null
}

ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.el.nativeElement.value.length<1||parseInt(this.el.nativeElement.value)<1?this.renderer.setProperty(this.el.nativeElement,"value", 0):null
    this.y=parseInt(this.el.nativeElement.value);
    //console.log(this.el.nativeElement.parentNode.parentNode.parentNode);
    // console.log(this.grandparent);
  }
}