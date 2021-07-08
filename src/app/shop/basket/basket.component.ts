import { ChangeDetectionStrategy, Component, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, reduce } from 'rxjs/operators';
import { JustaservService } from '../justaserv.service';
import { shake } from '../shared/myanimations/shake';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  animations: [ shake ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent implements OnInit {
  addedproducts:Array<any>;
  basketcomp:string = "basketcomponent";
  basketarraysub:Subscription;
  // basketarraystotnumub:Subscription;
  get totalnumber(){
    return this.addedproducts?.reduce((result,item)=>{return result += item?.quantity * item?.selecteditem.price},0)
  }  

  ////Methods////
trackbyID(index:number){
  return index ? index : Number;
}
/// Delete Item ///
deleteitem(basketarrayid:number) {
  this.cartserv.delete(basketarrayid);
}
////////////////////
  constructor(private cartserv:JustaservService) { }

  ngOnInit(): void {
    //Main Array Subscription
    this.basketarraysub = this.cartserv.seladded$.subscribe(
      data=>{this.addedproducts=data}
    );
    // this.basketarraystotnumub = this.cartserv.seladded$.subscribe(
    //   data=>{console.log("Second", data)}
    // );
    // this.basketarraystotnumub = this.cartserv.seladded$.pipe(
    //   reduce((result:number,item:Array<any>,i:number)=>{let as = (result += item[i]?.quantity * item[i]?.selecteditem.price); console.log(as); return as},0)
    // ).subscribe(
    //   data=>{this.totalnumber=data}
    // )
    // console.log(this.totalnumber)
    // This worked but didnt't synchronzie quite well, perhaps maybe also due to mutability matters, subscriptions were messy, that is why we picked getter along witha the redice method. See above
    // this.totalnumber = this.addedproducts?.reduce((result,item)=>{return result += item?.quantity * item?.selecteditem.price},0)
    // console.log(this.totalnumber);
  }
  

//////////////////////We must be cautious so as to UNSUBSCRIBE from the observable when we dont need it in real applications, otherwise we will have memory leaks.

}
