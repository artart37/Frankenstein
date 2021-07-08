import { Component, OnInit } from '@angular/core';

export interface Candidateusers{
  userid:number
  name:string
}
export interface Card{
  title:string
  text:string
  }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toggle=true;
  tivtiv:number;
  // Defining an array (with an object inside) and writing the tyoes as Card[] to suggest that its an array
  ngOnInit(): void {
  }
    cards: Card[] = [
    {title: 'Card 1', text: 'This is card number 1'},
    {title: 'This is card 2', text: 'This is card number 2'},
    {title: 'Last card!', text: 'This is card number 3'},
    {title: 'Fourth card', text: 'This is card number 4'}
  ]
  candidateusers: Candidateusers[] = [
    {userid: Math.round(Math.random() * 112), name:"Peter Chech"},
    {userid: Math.round(Math.random() * 112), name:"Robbie Williams"},
    {userid: Math.round(Math.random() * 112), name:"Steve Jobs"},
    {userid: Math.round(Math.random() * 112), name:"John Smith"},
    {userid: Math.round(Math.random() * 112), name:"Bryan Adams"}
  ]
  togglecards(){
  this.toggle=!this.toggle
  }
}