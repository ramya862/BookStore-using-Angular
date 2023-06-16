// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//  email:string='';
//  password:string='';
// }
import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/Types/Auth';
//import { LoginForm } from 'src/app/types/Auth';
//import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    email:string= '';
    password:string= '';
    ngOnInit(): void {
      
    }
    form: LoginForm = {
      email: '',
      password: '',
    };
    submit()
    {
      console.log(this.form)
      alert("Form submitted");
    }

 
}
