import { Injectable } from '@angular/core';
import { quotes } from './quotesList';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {


  constructor() { }
  
    // method to get all quotes
    getQuotes() {
      return quotes;
    }
}
