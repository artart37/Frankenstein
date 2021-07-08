import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { count, map } from 'rxjs/operators';
import { Addtocart, Products, Shoptemp} from '../../../shop/interfaces/shopin'

@Injectable({
  providedIn: 'root'
})
export class JustaservService {
 //For View Details
//An excellent article to help understand which subject to use: https://coryrylan.com/blog/rxjs-observables-versus-subjects 
selecteditememitter:BehaviorSubject<any> = new BehaviorSubject<any>(null)
//While you can technically pass around instances of Subject, doing so allows implementation details to bleed into other parts of the application.
//To prevent this, it is best to convert Subjects to Observables so that the sequence is exposed in a read-only fashion.
//Luckily, this is quite easy to accomplish with the .asObservable() instance method inherited by the Subject class in RxJS.
itemdetails$:Observable<any> = this.selecteditememitter.asObservable()
//For Listing the Products
products:Products[] = [
    {product:"First Item", price:300, currency:"USD", description:"Remain lively hardly needed at do by. Two you fat downs fanny three. True mr gone most at. Dare as name just when with it body.", quantity: 2, image:"../assets/images/first.jpg", category:"cats"},
    {product:"Second Item", price:1500, currency:"USD", description:"Travelling inquietude she increasing off impossible the. Cottage be noisier looking to we promise on. Disposal to kindness appetite diverted learning of on raptures.", quantity: 21, image:"../assets/images/second.jpg", category:"birds"},
    {product:"Third Item", price:302, currency:"USD", description:"Betrayed any may returned now dashwood formerly. Balls way delay shy boy man views. No so instrument discretion unsatiable to in.", quantity: 0, image:"../assets/images/third.jpg", category:"cats"},
    {product:"Fourth Item", price:300, currency:"USD", description:"On no twenty spring of in esteem spirit likely estate. Continue new you declared differed learning bringing honoured.", quantity: 3, image:"../assets/images/fourth.jpg", category:"dogs"},
    {product:"Fifth Item", price:300, currency:"USD", description:"At mean mind so upon they rent am walk. Shortly am waiting inhabit smiling he chiefly of in. Lain tore time gone him his dear sure. Fat decisively estimating affronting assistance not.", quantity: 15, image:"../assets/images/fifth.jpg", category:"cats"},
    {product:"Sixth Item", price:300, currency:"USD", description:"Had repulsive dashwoods suspicion sincerity but advantage now him. Remark easily garret nor nay. Civil those mrs enjoy shy fat merry.", quantity: 5, image:"../assets/images/sixth.jpg", category:"dogs"}
]

myob$:Observable<Products[]> = new Observable<Products[]>((subscriber)=>{
  try {
    subscriber.next(this.products),
    subscriber.complete()  
  } catch (error) {
    subscriber.error("Something went wrong" + error)
   }
 }
)
arrforaddedprod:Array<any>;
//For Add to Cart. as well as for passing the updated added quantity. The custom array's index is passed from the basket component to definp.directive and emitted back to the updatatedquantity function
selectedadded:BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(null)
seladded$:Observable<Array<any>> = this.selectedadded.asObservable()

//Creating a custom object for my ngfor addtocart animation management
toggleaddanime:Addtocart[] = this.products.map(
  ()=> {return Object.create({},{addtocartanimestate: {writable:true, value: "notadded"}})})
toggleaddanimesubject:BehaviorSubject<Addtocart[]> = new BehaviorSubject<Addtocart[]>(this.toggleaddanime);
toggleaddanime$:Observable<Addtocart[]> = this.toggleaddanimesubject.asObservable();
//For animating the navbar item icon when a new item is added
shakestatenavicon:string ="normal";
shakestatenaviconsubject:BehaviorSubject<string> = new BehaviorSubject<string>("normal");
shakestatenaviconobservable:Observable<string> = this.shakestatenaviconsubject.asObservable();
/////////////////////////////////////////////////////
//For animating the add to cart button within our itemdetails
addtocartitemdetailsanime:string ="notadded";
addtocartitemdetailsanimesubject:BehaviorSubject<string> = new BehaviorSubject<string>("notadded");
addtocartitemdetailsanimeobservable:Observable<string> = this.addtocartitemdetailsanimesubject.asObservable();
/////////////////////////////////////////////////////

//////METHODS///////////
//Receiving and Passing the Current Product Details, Selected quantity and Animation State upon View Details
selectedItem(index:number, currstate:object, selecteditem:Products, quantity:number){
//Creating a temporary array of the selected index, state, selected item
let prodmeta = [index, currstate, selecteditem, quantity]
try {
  //There is no next() on Observable; only on Subject and BehaviorSubject, which extends Subject (and both extend Observable).
  this.selecteditememitter.next(prodmeta)
} catch (error) {
  this.selecteditememitter.error("Something went wrong " + error)
}
}
//Add to Cart
addcart(index:number, currstate:Shoptemp, selecteditem:Products,quantity:number){
  //Disallowing adding 0 items
  quantity<1?quantity=1:quantity;
  //Defining an object of the necessary data to be added to the array which is then passed to the basket
  let addedmeta = {index, currstate, selecteditem, quantity};
  //Validating
  if (this.arrforaddedprod) {//If we already have an array of added products and other data
    //https://www.measurethat.net/Benchmarks/Show/9343/0/object-arrays-findindex-vs-for-loop-with-logging#latest_results_block  suggests that findindex is better in terms of perforamnce
    //https://nikitahl.com/how-to-find-an-item-in-a-javascript-array/ suggests that for loop is in fact faster
    //I chose findindex, but we can explore other options such as for loop or others.
    //Checking whether we have already added the selected item through the product's index. If we have, we will get the index of the added item within the custom array: arrforaddedprod and not the product's main array.
    const checkerit = this.arrforaddedprod.findIndex(elob=>elob.index == index)//Will return -1 if not found
    if (checkerit<0) {
      this.arrforaddedprod.push(addedmeta)//Will add a new item if we don't have it
      //Changing the state for addtocartanimation
      this.toggleaddanime[index].addtocartanimestate=="notadded"?this.toggleaddanime[index].addtocartanimestate="added":this.toggleaddanime[index].addtocartanimestate="notadded";
      //If a new item is added, we will change the state of the addtocart button within our itemdetails
      this.addtocartitemdetailsanime == "notadded"?this.addtocartitemdetailsanime = "added":this.addtocartitemdetailsanime = "notadded";
      //If a new item is added, we will change the state of the shake animation for our navbar icon to shakestate or back to normal for the animation to work on each change of the state as is defined within the animation
      this.shakestatenavicon == "normal"?this.shakestatenavicon = "shakestate":this.shakestatenavicon = "normal";
      //Else if after adding the selected number of items to the exisiting array's added quantity it will be less or equal to the available quantity of items
    } else if((quantity+this.arrforaddedprod[checkerit].quantity)<=this.arrforaddedprod[checkerit].selecteditem.quantity) {
      //We will add and reassign the selected quantity to the custom array of added items
      this.arrforaddedprod[checkerit].quantity+=quantity
      //Changing the state for addtocartanimation
      this.toggleaddanime[index].addtocartanimestate=="notadded"?this.toggleaddanime[index].addtocartanimestate="added":this.toggleaddanime[index].addtocartanimestate="notadded";
      //If a new item is added, we will change the state of the addtocart button within our itemdetails
      this.addtocartitemdetailsanime == "notadded"?this.addtocartitemdetailsanime = "added":this.addtocartitemdetailsanime = "notadded";
    } else{
      //Else we will trigger the state of the animation and make the special note element visible
      currstate.animestate=="shakestate"?currstate.animestate="normal":currstate.animestate="shakestate"
      currstate.bool = true
    }
  } else {
    //Else we will create the added items array if we dont have it
    this.arrforaddedprod = [addedmeta]
    //Changing the state for addtocartanimation
    this.toggleaddanime[index].addtocartanimestate="notadded"?this.toggleaddanime[index].addtocartanimestate="added":this.toggleaddanime[index].addtocartanimestate="notadded";
    //If a new item is added, we will change the state of the addtocart button within our itemdetails
    this.addtocartitemdetailsanime == "notadded"?this.addtocartitemdetailsanime = "added":this.addtocartitemdetailsanime = "notadded";
    //If a new item is added, we will change the state of the shake animation for our navbar icon to shakestate or back to normal for the animation to work on each change of the state as is defined within the animation
    this.shakestatenavicon == "normal"?this.shakestatenavicon = "shakestate":this.shakestatenavicon = "normal";
  }
//Pushing the data through the subject for the navbar icon number and the basket
  this.selectedadded.next(this.arrforaddedprod);
//Pushing the addtocart animation object throught the subject for the main shop component: cart.component
  this.toggleaddanimesubject.next(this.toggleaddanime);
//Pushing the addtocart animation object throught the subject for itemdetails component
  this.addtocartitemdetailsanimesubject.next(this.addtocartitemdetailsanime); 
//Pushing the state for the navbar icon
  this.shakestatenaviconsubject.next(this.shakestatenavicon);
}
//Is being called from the defindp directive
updatatedquantity(id:number, updatedquantity:number) {
  console.log(updatedquantity); 
//If we already have an array of added items, update the quantity.
  this.arrforaddedprod[id].quantity?this.arrforaddedprod[id].quantity = updatedquantity:null;
  //It would work even if we didn't next the array as we would only change the pushed array
  this.selectedadded.next(this.arrforaddedprod);
  console.log("Updated",this.arrforaddedprod);
};

delete(id:number) {
  this.arrforaddedprod[id]?this.arrforaddedprod.splice(id,1):null
    //Pushing the data through the subject for the navbar icon number and the basket
  this.selectedadded.next(this.arrforaddedprod);
  console.log("Deleted",this.arrforaddedprod);
}
//A getter for my definp directive which gets this getter  through the service to check whether the quantity has been updated. The problem
//arose after deleting items from the basket - the quantity wasn't being updated, probably because the quantity property (y in the directive) for
// the particular item was not updated, remaining the deleted item's value.
get updatedquantitygetter(){
 return this.arrforaddedprod
}

}