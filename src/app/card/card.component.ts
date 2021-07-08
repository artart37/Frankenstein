import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Card, Candidateusers} from '../home/home.component';
@Component ({
selector: 'app-card',
templateUrl: './card.component.html',
styleUrls: ['./card.component.css'],
/**Changing the syntax for dynamic content (interpolation. The Default is {{}}) in the card.component.html
Here we Change it to [[]], but we would need to change the syntax in card.component.html as well
interpolation:['[[',']]']
*/
//ALTERNATIVE TEMPLATE OPTIONS HTML
/**template: `
<div class="card">
<h2>{{title}}</h2>
<p>{{text}}</p>
</div>
`,
//ALTERNATIVE TEMPLATE OPTIONS CSS
styles:
[`.card{
padding: .5rem 1rem;
border: 1px dashed #ccc;
margin-bottom:1rem;
}
.card>h2 {
margin-bottom: .5rem;
}`]
*/
})
export class CardComponent implements OnInit {
/*Here we input the cards object into the card component. Above we add the import line*/
@Input() candies: Candidateusers
@Input() cards: Card
@Input() index: number
@Output() tivoutput = new EventEmitter

//Variables
title='This is custom Candy Agents'
text= 'This is my sample text'
tiv=42
array=[1,2,3,4,4,5,654,654897,89,"String"]
obj={name:'John',info: {age:25, job:'Frontend'}}
imgUrl: string="https://www.smallbizgenius.net/wp-content/uploads/2019/06/smallbizgenius_favicon.png"
disabled=false
value="Enabled";
textcolor:string;
cardDate: Date = new Date ();
testtext:string="Object text"
i:number;
getinfo(): string {
return "This is my function info.";
};

changetitle(){
this.cards.title="Title has been changed";
};
//Read more about events at https://www.w3schools.com/jsref/obj_events.asp and https://angular.io/guide/user-input
inputHandler(event: any){
console.log(event);
//We define a "value" constant inside the function and change the title data value by referencing the event
const value = event.target.value;
this.title=value;
};
/*ANOTRHER WAY OF TOW WAY BINDING WITH LOCAL REFERNCING
inputHandler(value){
console.log(value);
//We define a "value" constant inside the function and change the title data value by referencing to the event
//const value = event.target.value;
this.title=value;
};
*/
changeHandler(){
console.log(this.title);
}
ngOnInit(){
    this.tivoutput.emit(this.tiv)
    this.i= this.index-1;
    this.testtext = this.candies[this.i].name;
    // console.log(this.candies);
    // console.log(this.candies[this.i].name);
setTimeout(() => {
this.imgUrl="https://images.squarespace-cdn.com/content/54e3086ee4b0a566f12d72e6/1568271219817-HPEY4HPM2JLUNEHFTNIZ/Social+Media+Badge+Small.png?content-type=image%2Fpng";
this.disabled=true;
this.value="Disabled";
}, 3000);

};


}
