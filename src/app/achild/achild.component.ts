import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Asimparr, Obtype } from '../bindings/bindings.component';

@Component({
  selector: 'app-achild',
  templateUrl: './achild.component.html',
  styleUrls: ['./achild.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AchildComponent implements OnInit {
  @Input() mrp2:Observable<Asimparr[]>;
  @Output() clickeduser:EventEmitter<Obtype> = new EventEmitter
  @Output() idi:EventEmitter<number> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

trackbyID(index:number, arr:any) {
  return index?index:null
}

getrowdata(ida:number, line:Obtype){
this.idi.emit(ida)
this.clickeduser.emit(line)
}


}
