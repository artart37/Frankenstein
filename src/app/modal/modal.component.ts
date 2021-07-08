import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
constructor( private router : Router, private route: ActivatedRoute ) {}
closeModal() {
  console.log(this.route.snapshot.routeConfig.path);
  if (this.route.snapshot.routeConfig.path == "details"){
    this.router.navigate([{outlets: {modal: null}}], {relativeTo:this.route.parent});//null stands for the path, modal stands for the outlet name
    // The workaround for closing a child named outlet below
    //https://www.bennadel.com/blog/3351-closing-secondary-router-outlet-views-from-within-the-named-route-view-components-in-angular-4-4-4.htm
  }
  else {
    this.router.navigate(["", {outlets: {modal: null}}])
  }
}
ngOnInit(): void {
  }

}
