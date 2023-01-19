import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class AuthGuard implements CanActivate {
    constructor(private _router:Router){
  
    }
  canActivate(): boolean | Promise<boolean> {
    var isAuthenticated = !!JSON.parse(localStorage.getItem('userData')!)
    if (!isAuthenticated) {
        this._router.navigate(['/login']);
        return false;
    }
    return true;  
  }
}
