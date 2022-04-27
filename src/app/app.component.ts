import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes-generator';
  quotes: Quotes[] = [];

  constructor() {}

  addNewQuote(quote: Quotes){
    let q = this.quotes.push(quote)
    console.log('added a quote', this.quotes);
    console.log(quote)
  }
}
