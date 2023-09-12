import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http"
import { Observable } from "rxjs"
export class AuthInterceptor implements HttpInterceptor{
  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler):Observable<HttpEvent<any>> {
        debugger;
      const token = localStorage.getItem('token');
      req = req.clone({
         setHeaders:{
          Authorization:`Bearer ${token}` ?? '[]'
         }
      });
       return next.handle(req);
  }
}