import { Injectable } from '@angular/core';
import { Book } from '../bookdetails/book';

@Injectable({
  providedIn: 'root'
})
export class BookcomponentService {
  getBooks(): Book[] {

    return [{name:"Clean code",
    author:"Robert C Martin",
    src:"https://m.media-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,203,200_.jpg",
    price:1000},
    {name:"Pragmatic Programmer",
    author:"David Thomas",
    src:"https://m.media-amazon.com/images/I/51yaxPX4BFL._AC_UY327_FMwebp_QL65_.jpg",
    price:1300},
    {name:"Accelerate",
    author:"Nicole",
    price:700,
    src:"https://m.media-amazon.com/images/I/41OoXs3W3nL._AC_UY327_FMwebp_QL65_.jpg"},{name:"practical programming",
    author:"Paul",
    src:"https://m.media-amazon.com/images/I/61BHIKyQBuL._AC_UY327_FMwebp_QL65_.jpg",
    price:900},{name:"Programming Challenges",author:" Steven S Skiena and Miguel A. Revilla ",price:1800,src:"https://m.media-amazon.com/images/I/519B4YnNcYL._AC_UY327_FMwebp_QL65_.jpg"},{name:"Learn Professional Programming Skill in C++ Programming Language",author:" Adalat Khan ",price:1500,src:"https://m.media-amazon.com/images/I/61tRmt8z4YL._AC_UY327_FMwebp_QL65_.jpg"},{name:"Introduction to Recursive Programming",author:"Manuel Rubio-Sanchez",price:3500,src:"https://m.media-amazon.com/images/I/51P6s+VTjbL._AC_UY327_FMwebp_QL65_.jpg"}
  ];  }

  constructor() { }
  
  }
 