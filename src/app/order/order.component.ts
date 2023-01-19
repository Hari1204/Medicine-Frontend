import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders:any
  userid: any;
  userData: any;
  oid: any;
  orderdata: any;
  constructor(private _service:CommonService,private _router:Router) { }
  ngOnInit(): void {
    this.userData=JSON.parse(localStorage.getItem('userData')!)
    this.getAllOrderItems(this.userid);
  }
  getAllOrderItems(userid:any){
    this.userData=JSON.parse(localStorage.getItem('userData')!)
    this.userid=this.userData.userid;
    console.log("user "+this.userid)
    this._service.getAllOrderItems(this.userid).subscribe(
      data=>{
        this.orders=data;
        console.log(data);
      })

  }
  invoice(data:any){
    localStorage.setItem("orderdata",JSON.stringify(data));
    console.log(data)
    this._router.navigate(['./invoice'])
  }

}
