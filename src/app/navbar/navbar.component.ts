import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JustaservService } from '../justaserv.service';
import { shake } from '../shared/myanimations/shake';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [ shake ]
})
export class NavbarComponent implements OnInit {
numberofaddeditems:number;
iconshakeanime:Observable<string>

  constructor(private prodserv:JustaservService) { }
  //We add the ? sign safety operator (see more in bindings) because initially, we dont have an array of added items
  ngOnInit(): void {
   this.prodserv.seladded$.subscribe(
     data=>{this.numberofaddeditems = data?.length}
     );

   //Assigning my porperty in navbar to the service's Observable to get the subject's data in the view through async
   this.iconshakeanime = this.prodserv.shakestatenaviconobservable
  }
//////////////////////We must cautious so as to UNSUBSCRIBE from the observable when we dont need it in real applications, otherwise we will have memory leaks.


}
