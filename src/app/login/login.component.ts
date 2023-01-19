import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new User()
  msg='';
  constructor(private _router:Router,private _service:CommonService) { }

  ngOnInit(): void {
  }
  loginuser(){
    this._service.loginUserRemote(this.user).subscribe(
      data => {
        this._router.navigate(['./home'])
        localStorage.removeItem("userData")
        localStorage.setItem("userData",JSON.stringify(data));
        console.log("Response Received")  
        console.log(data)        
        console.log(data.userid)   
      },
      error => {
        console.log("Exception Occured")
        this.msg="Bad Credentials,Enter the Valid Mobile Number and Password";
      }
    )
  }
}
