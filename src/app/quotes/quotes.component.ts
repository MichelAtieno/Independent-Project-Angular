import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public maxCount = 0;
  quotes = [
    new Quote('Maya Angelou', 'If you cant change anything change your attitude.', 'Michel', new Date(2018, 5, 23) ),
    new Quote('Maya Angelou', 'People will never forget how you made them feel', 'Susan', new Date(2018, 5, 24) ),
    new Quote('Maya Angelou', 'Nothing will work unless you do.', 'Jerusha', new Date(2018, 5, 25) ),
  ];

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  addNewQuote($event) {
    $event.completeDate = new Date();
    this.quotes.unshift($event);
  }


  addVotes(index) {
    this.quotes[index].vote += 1;
    if (this.quotes[index].vote > this.maxCount) {
      this.maxCount = this.quotes[index].vote;
    } else if (this.quotes[index].vote <= this.maxCount) {
      console.log(this.maxCount); }
  }
  minusVotes(index) {
    if (this.quotes[index].vote > 0) {
      this.quotes[index].vote -= 1;
    } else {this.quotes[index].vote = 0; }

  }


  constructor() { }

  ngOnInit() {
  }

}
