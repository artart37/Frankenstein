import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { Products, Shoptemp } from '../interfaces/shopin';

@Component({
  selector: 'app-itemquantity',
  templateUrl: './itemquantity.component.html',
  styleUrls: ['./itemquantity.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemquantityComponent implements OnInit, OnChanges,AfterViewInit {
@Input() item:Products;
@Input() states:Shoptemp;
// @Input() i:number; //Had we gotten the specific input element through Id
@Input() val:number;
@Input() parentcomp:string;
@Input() index:number;
@ViewChild("quant", {read:ElementRef}) inpref:ElementRef

constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void { }
  ngAfterViewInit(): void {}

}