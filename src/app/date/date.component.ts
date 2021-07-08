import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  realdate: Date = new Date ();
  intervalID:any;
  @Input() apropertyforbinding:Array<any>;
  @Input() thenameoftheparentbindingcomp:string;
  @Output () customclick:EventEmitter<any> = new EventEmitter ();
  
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    setInterval(this.intervalID=() => {
      this.realdate = new Date();
   }, 100);//if I set the interval to 1000 - 1 second it will still work but there is a light delay milisecond delay, 100 works better, 10 updates 100 times in a second and so on
  // Emittingt a custom event to the binding parent component
  this.customclick.emit("A Message from Date Component")
  }
  ngOnDestroy() {
    //Stoping the timer
    clearInterval(this.intervalID);
    console.log("destroyed"); 
  }






}
