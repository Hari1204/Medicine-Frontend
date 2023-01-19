import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  answer:any;
  products:any;
  userData: any;
  userid:any
  searchitem: any;
  type:any;
  select:any
  constructor(private _service:CommonService,private _router:Router) { }
  ngOnInit(): void {
    this.userData=JSON.parse(localStorage.getItem('userData')!)
    this.getProducts();
  }
  addcart(data:any){
    data.userid=this.userData.userid
    console.log(data.userid);
    data.qty=1;
    this._service.addToCart(data).subscribe(
      data=>{
        console.log(data)
        this.reloadCurrentRoute();
      }
    )
  }
  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this._router.navigate([currentUrl]);
    });
}
getProducts() {
  this._service.getAllItems().subscribe(
    data=>{
      this.products=data;
      console.log(this.products);
    }
  )
}
search(){
  if(this.searchitem=="")  
  {  
    this.getProducts();
  }
    else{  
    this.products=this.products.filter((result:any)=>{  
      return result.productname.toLocaleLowerCase().match(this.searchitem.toLocaleLowerCase()); 
    }); 
  }  
}
searchh(){
  if(this.answer=="")  
  {  
    this.getProducts();
  }
    else{  
    this.products=this.products.filter((result:any)=>{  
      return result.productdesc.toLocaleLowerCase().match(this.answer.toLocaleLowerCase()); 
    }); 
  }  
}
list(type:any){
  console.log("Type");
  
  console.log("Hii"+this.type)
}
getvalue(val:any){
  console.log("noe"+val);
  
  if(val=="abc"){
    alert("hi")
  }
 else{
  alert("no")
 }
}
getSelectedValue(event:any){
  this.select=event.target.value;
  console.log(this.select)
  if(this.select=="View all"){
    this._service.getAllItems().subscribe(
      data=>{
        this.products=data;
        console.log(this.products);
      }
    )
  }
  else{
  this._service.getRequiredProduct(this.select).subscribe(
    data=>{
      this.products=data;
      console.log("In"+this.select);      
    }
  )
}
}

}
