import { Quotes } from '../quotes';
import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() onCreateQuote = new EventEmitter<Quotes>();
  newQuote = new Quotes(0, '',"", 0, 10);
  text!: string;

  
  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    this.newQuote.quotes = this.text
    this.onCreateQuote.emit(this.newQuote)
  }
}
