import { Component } from '@angular/core';
import { User } from '../user.service';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //creating an object for user class
  user:User=new User();

  //Creating a constructor to connect login service
  constructor(private loginservice:LoginserviceService){}
  ngOnInit():void{

  }
  loginRegister(){

    console.log(this.user);
    this.loginservice.loginUser(this.user).subscribe(date=>
    {
      window.alert("user login is successful")
    },
    error=>window.alert("user login is not successful"));
  
  }

}
