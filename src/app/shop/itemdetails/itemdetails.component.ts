import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JustaservService } from 'src/app/justaserv.service';
import { addbutton } from 'src/app/shared/myanimations/addtocart';
import {shake} from "../../shared/myanimations/shake"
import { Products, Shoptemp } from '../interfaces/shopin';
import { ItemquantityComponent } from '../itemquantity/itemquantity.component';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css'],
  animations: [ shake, addbutton ]
})
export class ItemdetailsComponent implements OnInit {
errormessage:string;
currentstate:object;
itemindex:number;
prodmeta:any;
//Because we only have one instance of the itemquantity in this component, we are using viewchild, instead of viewchildren
@ViewChild(ItemquantityComponent) inval:ItemquantityComponent
//An expression for myt add to cart
addanimestateindetails:Observable<string>

  constructor(private prodserv:JustaservService, private router:Router) { }

  ngOnInit(): void {
   this.prodserv.itemdetails$.subscribe(data=>this.prodmeta=data, err=>this.errormessage=err)
   //Connecting to the service's observable for retrieving the animation state pushed from the service through the service. We retrieve the observable from async, that is why we do not use subscrbieb the ordinary way.
   this.addanimestateindetails = this.prodserv.addtocartitemdetailsanimeobservable
   console.log(this.prodmeta[3]);
   
  }

//////////////////////////////////////////////////////
//placeorder() and the addtocart() are the same methods as the ones from the cart.component.ts method
//We could have probably exported them through exportAs. see more in core. I was tool lazy to do this here.
//Besides, I was worried about performance
//////////////////////////////////////////////////////

//Place Order
placeorder() {
  this.router.navigate([{outlets:{modal:"placeorder"}}], {skipLocationChange: true});
}

//Add to cart//
addtocart(prodindex:number, currentstate:Shoptemp, currentproduct:Products){
  if (currentproduct.quantity>0){//Check whether we have available products
  let inpval = parseInt(this.inval.inpref.nativeElement.value);
  //Disallowing adding 0 items. We do have a similar validation within the service though
  inpval<1?inpval=1:null
  this.prodserv.addcart(prodindex, currentstate, currentproduct, inpval);
  }else{
    //Otherwise go to the route defined above
    this.placeorder();
  }
}
  
}
