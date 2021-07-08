import  {Pipe, PipeTransform} from "@angular/core"

@Pipe ({
    name:'numbertoletter'
})
export class CustomPipe implements PipeTransform {
    transform(value:number, casetype:string){
        if (Math.round(Math.abs(value))<=26 && Math.round(Math.abs(value))>0) {
            switch (casetype) {
            case 'lowerletters':
                let vvl  = 96+Math.round(Math.abs(value))
                return String.fromCharCode(vvl)
            case 'capitalletters':
            let vvc  = 64+Math.round(Math.abs(value))
            return String.fromCharCode(vvc)
            }
        }
    }
}
//Charcodes for Mecatar        65-90
//Charcodes for Poqratar       97-122

//A Logic for returning a sentence case text
// let len = Math.floor( Math.log(Math.round(Math.abs(value))) / Math.LN10 );
// let vvsf = 64 + ( (Math.round(Math.abs(value)) / Math.pow(10, len)) % 10) | 0;
// // The fastest way to find the first digit https://medium.com/@chenzhenxi/fastest-way-to-select-the-ntn-digit-in-integer-in-javascript-216fa6f9dd71
// let vvsr = 96 + Math.round(Math.abs(value))
// return String.fromCharCode(vvsf) + String.fromCharCode(vvsr).substr(1)
// @Pipe ({
//     name:'totalprice'
// })
// export class TotalPrice implements PipeTransform {
//     transform(value:number, multiplier:number){
//         return value*multiplier
//    }
// }