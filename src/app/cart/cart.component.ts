import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(private cartservice:CartService)
{

}
ngOnInit():void{}
getcart()
{
  return this.cartservice.get();
}
}
