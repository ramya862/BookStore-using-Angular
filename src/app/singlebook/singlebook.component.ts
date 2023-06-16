import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../bookdetails/book';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  @Input() book:Book={} as Book;
  //@Output() bookEmitter=new EventEmitter<Book>();
i:number=0;
  constructor(private cartService:CartService) {}
  ngOnInit():void{}
  isIncart:boolean=false;
  addToCart(event:any)
  {
    this.isIncart=true;
    this.cartService.add(this.book);
  }
  removeFromCart()
  {
    this.isIncart=false;
    this.cartService.remove(this.book);
  }

}
