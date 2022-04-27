import { Component, Input, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quotes!: Quotes[]
  
  quote: Quotes[] = [
    new Quotes( 1, "We accept the love we think we deserve.","johny",34,4),
    new Quotes( 2, "Be yourself;everyone else is already taken. ","Oscar Wilde",32,2),
    new Quotes( 3, "Be the change that you wish to see in the world.","Mahatma Gandhi",50,0)

  ];

  upvote(i:number){
    this.quote[i].upvotes += 1;
    console.log()
  }



  downvote(i:number){
    this.quote[i].downvotes += 1;
    }

  
  constructor(quoteService: QuoteService) {
    // this.quotes = quoteService.getQuotes()

  console.log(this.quotes)
   }

  ngOnInit(): void {
  }

}
