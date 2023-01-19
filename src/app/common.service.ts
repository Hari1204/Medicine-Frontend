import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
public loginUserRemote(user:User):Observable<any>{
return this._http.post<any>("http://localhost:8086/User/App/login",user);
 }
public RegisterUserFromRemote(user :User):Observable<any>{
return this._http.post<any>("http://localhost:8086/User/register",user) 
}
public deleteFromCart(){
return this._http.delete<any>("http://localhost:8086/Cart/emptycart");
}
public getCartcount(userid:any):Observable<any>{  
return this._http.get<any>("http://localhost:8086/Cart/Totalqty/"+userid); 
}
// public getCartcount():Observable<any>{  
//   return this._http.get<any>("http://localhost:8086/Cart/countrow"); 
//   }
public getAllItems():Observable<any>{
  return this._http.get<any>("http://localhost:8086/Product/getproduct")
}
public addToCart(products:any):Observable<any>{
  return this._http.post<any>("http://localhost:8086/Cart/inc",products)
}
public getRequiredProduct(select:any):Observable<any>{
  return this._http.get<any>("http://localhost:8086/Product/getProd/"+select);
}
  public getAllcartItems(userid:any):Observable<any>{
  return this._http.get<any>("http://localhost:8086/Cart/viewall/"+userid)
  }
  public delFromCartByID(cartid:any){
  return this._http.delete<any>("http://localhost:8086/Cart/"+`${cartid}`);
  }
  public inQty(toyid:any){
  return this._http.post<any>("http://localhost:8086/Cart/inc",toyid);
  }
  public decQty(toyid:any){
  return this._http.put<any>("http://localhost:8086/Cart/dec",toyid);
  }
  public addtoorder(cart:any){
  return this._http.post<any>("http://localhost:8086/Order/add",cart);
  }
  public addToTemp(cart:any){
    return this._http.post<any>("http://localhost:8086/Temp/saveTemp",cart)
  }
  public getTemp():Observable<any>{
    return this._http.get<any>("http://localhost:8086/Temp/getData")
  }
  public getAllOrderItems(userid:any):Observable<any>{
    return this._http.get<any>("http://localhost:8086/vieworder/"+userid);
  }
  public deleteAllTemp(){
    return this._http.delete<any>("http://localhost:8086/Temp/deleteAll");
  }
  public getInvoice(oid:any):Observable<any>{
    return this._http.get<any>("http://localhost:8086/Order/view/"+oid);
  }
  public UpdateNewPassword(user:any){
    return this._http.put<any>("http://localhost:8086/User/register/updatePass",user);
  }
}
