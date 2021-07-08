import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Candidateusers } from '../candidate/candidate.component';

@Component({
  selector: 'app-candidatedetails',
  templateUrl: './candidatedetails.component.html',
  styleUrls: ['./candidatedetails.component.css']
})
export class CandidatedetailsComponent implements OnInit {
  departmentuserid:number;
  username:string;
  test:string="This is a test message"
  urlstring:string=window.location.href;
  inputtext:string = "Input text"
  obtxt:string;
  @Input() candidateusers: Candidateusers
constructor(private route: ActivatedRoute, private router: Router) { }
ngOnChanges() {
}
ngOnInit(): void {
 let useridrandom = parseInt(this.route.snapshot.paramMap.get('userid'));
 this.departmentuserid = useridrandom;
 };
submitinputvalue(value) {
  this.inputtext = value;
};
changeHandler(){
  console.log(this.inputtext);
}
}