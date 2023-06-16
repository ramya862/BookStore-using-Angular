// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BookcomponentComponent } from './bookcomponent/bookcomponent.component';
// import { FormsModule } from '@angular/forms';
// import { SinglebookComponent } from './singlebook/singlebook.component';
// import { BookcomponentService } from './books/bookcomponent.service';
// import { BooksmoduleModule } from './booksmodule/booksmodule.module';
// import { CartComponent } from './cart/cart.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { LoginComponent } from './auth/login/login.component';
// import { AuthModule } from './auth/auth/auth.module';

// @NgModule({
//   declarations: [
//     AppComponent,
//     BookcomponentComponent,
//     SinglebookComponent,
//     CartComponent,
//     NavbarComponent,
//     RegisterComponent,
//     LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,AuthModule
//   ],
//   //providers: [BookcomponentService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth/auth.module';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookcomponentComponent } from './bookcomponent/bookcomponent.component';

@NgModule({
  declarations: [AppComponent,CartComponent,SinglebookComponent,BookcomponentComponent],
  imports:[BrowserModule,AppRoutingModule,AuthModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
