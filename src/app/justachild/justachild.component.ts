import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Asimparr } from '../bindings/bindings.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-justachild',
  templateUrl: './justachild.component.html',
  styleUrls: ['./justachild.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JustachildComponent implements OnInit {
@Input() mrp:Observable<Asimparr[]>

  constructor() { }

  ngOnInit(): void {  }

trackbyID(index:number, arr:any[]){
  return index ? index : Number;
}

}
