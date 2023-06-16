import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookcomponentService } from '../books/bookcomponent.service';
import { BookcomponentComponent } from '../bookcomponent/bookcomponent.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[BookcomponentService],
  exports:[]
})
export class BooksmoduleModule { }
