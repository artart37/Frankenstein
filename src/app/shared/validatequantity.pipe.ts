import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name:'validatequantity'
})
export class ValidateQuantity implements PipeTransform {
  transform(value:number, bool:boolean){
      if (value<=5 && value>=1 || bool && value>5) {
          return "Only " + value + " left."
      } else if(value<1) {
          return "Sold out"
      } else  {
          return null
       }
     }
}
