import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    console.log(req.url)
    console.log(req.url.includes("/session"))
    console.log(req.url.includes("/users"))
    if (  !(req.url.includes("/session") || req.url.includes("/users")) ){
            const token = window.sessionStorage.getItem("token");
            const myheader = req.clone({
                    headers:req.headers.set("X-Access-Token",token)})
            console.log("token"+token)
            return next.handle(myheader);
    }else{
            return  next.handle(req)
    }
  }
}