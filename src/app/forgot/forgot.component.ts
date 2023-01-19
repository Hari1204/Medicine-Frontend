import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { User } from '../user';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  user = new User();
  msg:string = '';

  constructor(private _router:Router, private _service:CommonService) { }

  ngOnInit(): void {
  }
backhome()
{
  this._router.navigateByUrl("login")
}
save()
{  
  console.log("Ins save function");  
  console.log(this.user.userid);
  console.log(this.user.pass);
  console.log(this.user.confirmpass);
  if(this.user.pass == this.user.confirmpass)
  {  
    this._service.UpdateNewPassword(this.user).subscribe(
      data =>
      {
        alert("Password Changed Successfully!");
        console.log(this.user);
        
        this._router.navigateByUrl('login');
      }
    )

  }
  else{
    alert("Passwords does not match");
    this.msg = "* Passwords does not match *";
  }
}
}
