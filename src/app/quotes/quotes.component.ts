import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quote("Maya Angelou","If you don't like something change it. If you can't change anything change your attitude.","Michel", new Date(2018,5,23) ),
    new Quote("Maya Angelou","People will forget what you said,people will forget what you did, but people will never forget how you made them feel","Susan", new Date(2018,5,24) ),
    new Quote("Maya Angelou","Nothing will work unless you do.","Jerusha", new Date(2018,5,25) ),
  ]
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

  completeQuote(isComplete,index) {
    if (isComplete){
      this.quotes.splice(index,1);
    }
  } 

  addNewQuote($event) {
    $event.completeDate=new Date();
    this.quotes.unshift($event);
  }  
 


  constructor() { }

  ngOnInit() {
  }

}
