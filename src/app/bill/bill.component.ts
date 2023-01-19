import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  orders:any
  Data: any;
  userData: any;
  cartquantity: any;
  Total: any;
  orderid: any;
  orderdata: any;
  oid: any;
  mode:any
  temps:any;

  constructor(private _service:CommonService,private _router:Router) { }
  ngOnInit(): void {
    this.getAllTemp();
    this.orderdata=JSON.parse(localStorage.getItem('orderid')!)
    this.Data=JSON.parse(localStorage.getItem('Data')!)
    this.userData=JSON.parse(localStorage.getItem('userData')!)
    // this.cartquantity=JSON.parse(localStorage.getItem('cartData')!)
    this.Total=JSON.parse(localStorage.getItem('Total')!)
    this.mode=CartComponent._val
    
  }
pdf(){
  window.print();
}
home(){
  this._service.deleteAllTemp().subscribe(data=>{
    this.temps=data;
  })
  this._router.navigate(['./home']);
}

getAllTemp(){
  this._service.getTemp().subscribe(
    data=>{
      this.temps=data;
    }
  )
}

}
