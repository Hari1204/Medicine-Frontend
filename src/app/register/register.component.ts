import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  msg = '';
  passCheckmsg:string = '';
  constructor(private _service:CommonService,private _router:Router) { }


  ngOnInit(): void {
  }
  register(){
    console.log(this.user.pass);
    console.log(this.user.confirmpass);
    
    
    if(this.user.pass == this.user.confirmpass)
    {
    this._service.RegisterUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response Received")
        this._router.navigate(['./login'])
      },
      error => {
        console.log("Exception Occured")
        this.msg="The User ID is already taken";
      })
    }
    else{
      this.passCheckmsg = "* Passwords does not match *";
      alert("Passwords does not match");
    }
}


}
