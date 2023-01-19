import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userid: any;
  userData: any;
  cartGrandTotal: any;
  len: any;
  i: any;
  static _amount: number;
  todayDate:Date=new Date();
  countTotal: any;
  carts: any;
  date: any;
  static _countval: number;
  conlen: any;
  ttlcount: any;
  static _val: any;

  constructor(private _service:CommonService,private _router:Router) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart()
  {
    this.userData=JSON.parse(localStorage.getItem('userData')!)
    this.userid=this.userData.userid;
    console.log(this.userid)
    this._service.getAllcartItems(this.userid).subscribe(
      data=>{
        console.log("getcart function"+data);

        this.carts=data
      }
    )
  }
  inc(toyid:any){
    this._service.inQty(toyid).subscribe(
      data=>{
        console.log(toyid);
        this.reloadCurrentRoute();
      }
    )
  }
  dec(toyid:any){
    this._service.decQty(toyid).subscribe(
    data=>{
      console.log(toyid);
      this.reloadCurrentRoute();
    })
  }
    remove(cartid:any){  
      this._service.delFromCartByID(cartid).subscribe(
        data=>{
          console.log(cartid);
          this.reloadCurrentRoute();
        }
      )
    }
    getTotalAmount(item:any){
      this.cartGrandTotal=0;
      this.len=item.length;
     for(this.i=0;this.i<this.len;this.i++){
      this.cartGrandTotal+=Number((item[this.i].price)*(item[this.i].qty));
      this.cartGrandTotal=this.cartGrandTotal;
      CartComponent._amount=this.cartGrandTotal;
      localStorage.setItem("Total",JSON.stringify(this.cartGrandTotal));
     }
     return this.cartGrandTotal
    }
    reloadCurrentRoute() {
      let currentUrl = this._router.url;
      this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this._router.navigate([currentUrl]);
      });
  
  }
  shop(){
    this._router.navigate(['./home'])
  }
  purchase(){
    console.log(this.carts)
    alert("Order Placed");
    this.countTotal=0;
    if(this.carts.length>0){
  
      this.carts.forEach((element:any)=> {
        element.date=this.todayDate;
        console.log(this.date)
        this._service.addToTemp(element).subscribe(
          data=>{
          this.carts=data 
        this._service.addtoorder(element).subscribe(data =>{ 
          localStorage.setItem("Data",JSON.stringify(data));   
   
          if(data){
            // localStorage.removeItem("Data");
        
            this._service.deleteFromCart().subscribe(data =>{
              this.carts=data;
              console.log(this.carts)
            })
          }
          this.carts=data;
          console.log(this.carts);
          
        })
      })
      
      })
    }
  this._router.navigate(['./bill'])
  
  }
  
  county(item:any){
    this.countTotal=0;
    this.conlen=item.length;
    for(this.i=0;this.i<this.conlen;this.i++){
      this.countTotal+=Number((item[this.i].qty))
      this.countTotal=this.countTotal;
      CartComponent._countval=this.countTotal;
      this.ttlcount=CartComponent._countval
      console.log(this.countTotal);
      localStorage.setItem("cartData",JSON.stringify(this.countTotal));
    }
    return this.countTotal
    }
    addmore(){
      this._router.navigate(['./home']);
    }
}
