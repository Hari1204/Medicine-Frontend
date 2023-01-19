import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  orders:any
  Data: any;
  userData: any;
  cartquantity: any;
  Total: any;
  orderid: any;
  orderdata: any;
  oid: any;

  constructor(private _service:CommonService,private _router:Router) { }
  ngOnInit(): void {
    this.orderdata=JSON.parse(localStorage.getItem('orderdata')!)
    this.Data=JSON.parse(localStorage.getItem('Data')!)
    this.userData=JSON.parse(localStorage.getItem('userData')!)
    this.cartquantity=JSON.parse(localStorage.getItem('cartData')!)
    this.Total=JSON.parse(localStorage.getItem('Total')!)
  }
pdf(){
  window.print();
}
history(){
  this._router.navigate(['./order']);
}
getInvoiceItems(){
  this.oid=this.orderdata.orderid;
  console.log("Invoice for"+this.oid)
  this._service.getInvoice(this.oid).subscribe(
    data=>{
      this.orders=data;
      console.log(data);
    })
  }


}
