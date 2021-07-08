import { ElementRef, OnChanges, QueryList, Renderer2, SimpleChanges, ViewChildren } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {from, Observable, Observer, Subscription } from 'rxjs';
import { JustaservService } from '../../../app/justaserv.service';
import { Addtocart, Products, Shoptemp } from '../interfaces/shopin';
import {shake} from "../../shared/myanimations/shake";
import {elng} from "../../shared/myanimations/enterleave";
import {addbutton} from "../../shared/myanimations/addtocart";
import { Router } from '@angular/router';
import { ItemquantityComponent } from '../itemquantity/itemquantity.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [ shake, elng, addbutton ]
})
export class CartComponent implements OnInit, OnDestroy, OnChanges {
myproducts:Products[];
prodsubscription:Subscription;
prodobserver:Observer<Products[]>;
shakestate:string;
states:Shoptemp[];
quantity:number;
//An array object created here within ngonit for my justaserv service's subject to toggle the state and implement animation
addanimestate:Addtocart[];
addtocartsub:Subscription;
@ViewChildren(ItemquantityComponent) inval:QueryList<ItemquantityComponent>
//timer:Observable<number> = timer(0,1000)
////Methods////
trackbyID(index:number){
  return index ? index : Number;
}
/////////////////////////////////////////
//Go To Product Details//
//A Good example of auxilliary routes and skipping location change below
//https://stackblitz.com/edit/shiva-auxiliary-routes?file=src%2Fapp%2Fapp-routing.module.ts
itemdetails(i:number, currentstate:object, productitem:Products) {
  let inpval = parseInt(this.inval.toArray()[i].inpref.nativeElement.value);
  //Navigating to the modal with the url addressnot being changed
  this.router.navigate([{outlets:{modal:"details"}}], {skipLocationChange: true});
  //Passing the data to the justservice's selectedItem() function
  this.products.selectedItem(i, currentstate, productitem, inpval)
  // Had we gotten the input element through a dynamic ID
  // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
  // Getting the input element by the dynamically generated id number in itemquantity. A better solution (a more angular way) would have been through viewchildren or through a service
  // const inpval = parseInt((<HTMLInputElement>document.getElementById("inp"+i)).value);
}
//Place Order
placeorder() {
  this.router.navigate([{outlets:{modal:"placeorder"}}], {skipLocationChange: true});
}
//Add to cart//
addtocart(prodindex:number, currentstate:Shoptemp, currentproduct:Products){
  if (currentproduct.quantity>0){//Check whether we have available products 
  let inpval = parseInt(this.inval.toArray()[prodindex].inpref.nativeElement.value);
  //Disallowing adding 0 items. We do have a similar validation within the service though
  inpval<1?inpval=1:null
  this.products.addcart(prodindex, currentstate, currentproduct, inpval)
  }else{//Otherwise go to the route defined above
    this.placeorder();
  }
}
constructor(private products:JustaservService, private router:Router,private renderer:Renderer2, private el:ElementRef) { }
ngOnInit(): void {
/////////////////////Defining our Observer //////////////////////
this.prodobserver ={
  next:data=>{this.myproducts=data},
  error:err=>{console.log(err)},
  complete:()=>{}
};
///////////////////Subscribing to our Observable from our service ////////////////
this.prodsubscription = this.products.myob$.subscribe(this.prodobserver)
//Creating a custom object for my ngfor special note animation (animation states for each item and boolean state for special notes for each item) https://www.youtube.com/watch?v=UrM9xgPxq1E
//https://stackoverflow.com/questions/62714131/convert-returned-observables-to-custom-class-array-in-angular Another way
this.states = this.myproducts.map(
  ()=> {return Object.create({},{animestate: {writable:true, value: "normal"},bool: {writable:true, value: false}})})
//For detailed options on creating arrays: https://basarat.gitbook.io/typescript/main-1/create-arrays

//Defining the local property addanimestate being equal to the services pushed Observable carrying the state.
  this.addtocartsub = this.products.toggleaddanime$.subscribe(data=>{this.addanimestate=data})
}

ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class. 
}
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.prodsubscription.unsubscribe();
  this.addtocartsub.unsubscribe();
}
}