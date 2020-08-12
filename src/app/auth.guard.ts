import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private route:Router) { }
  
  canActivate(){
    const token = window.localStorage.getItem("token")
    if (!token){
       this.route.navigate(["/sigin"]);
       return false;
    }
    return true;
  }
  
}
