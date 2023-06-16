import { Injectable } from '@angular/core';
import { Book } from '../bookdetails/book';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  remove(book: Book) {

   this.cart=this.cart.filter((b)=>b !=book);
  }
  cart:Book[]=[];
  constructor() { }
  add(book:Book)
  {
    this.cart.push(book);
    console.log(book);
  }
  displaycart()
  {

  }
  get()
  {
    return this.cart
  }
}
