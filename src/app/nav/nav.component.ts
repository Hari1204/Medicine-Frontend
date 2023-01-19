import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userData: any;
  count: any;
  select: any;
  products: any;
  userid:any;

  constructor(private _router:Router,private _service:CommonService) { }

  ngOnInit(): void {
    this.userData=JSON.parse(localStorage.getItem('userData')!)
    this.cartcount()
  }
  logout(){
    localStorage.removeItem("userData")
    localStorage.removeItem("cartData")
    this._router.navigate(['./login'])
    this._service.deleteFromCart().subscribe(data =>{
      this.cart=data;
    }
    )
  }
  cart(){
    this._router.navigate(['./cart'])
  }
  order(){
    this._router.navigate(['./order'])
  }
  home(){
    this._router.navigate(['./home'])
  }
 
  cartcount(){
    this.userid = this.userData.userid
    this._service.getCartcount(this.userid).subscribe(
     data=>{
      this.count=data;
      console.log(this.userid);
    }
    )
  }
  bill(){
    this._router.navigate(['./bill'])
  }
  pay(){
    this._router.navigate(['./payment'])
  }

}
