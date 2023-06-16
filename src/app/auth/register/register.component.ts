import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/Types/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
email:string="";
form: RegisterForm = {
  email: '',
  password: '',
  confirmpassword:''
};
submit()
{
  console.log(this.form)
  alert("Registered Successfully")
}
}
