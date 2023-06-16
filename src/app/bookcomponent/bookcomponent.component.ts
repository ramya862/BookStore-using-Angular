import { Component } from '@angular/core';
import { BookcomponentService } from '../books/bookcomponent.service';
interface Book{
  name:string;
  author:string;
  src:string;
  price:number;
}
@Component({
  selector: 'app-bookcomponent',
  templateUrl: './bookcomponent.component.html',
  styleUrls: ['./bookcomponent.component.css']
})

export class BookcomponentComponent {
  constructor(private booksService:BookcomponentService  )
  {

  }
  books:Book[]=[];
isDisabled:boolean=false;
isShowing:boolean=true;
handleClick()
{
  alert("Dispalyed all the items");
}
names:string=""
toggleBooks()
{
  this.isShowing=!this.isShowing;
}
addToCart(event:any)
{
  console.log(event)
}
ngOnInit():void{
  this.books=this.booksService.getBooks();
}
}

