import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../enviornment/environment";
@Injectable({
    providedIn:'root'
})
export class ApiService {
   constructor(
    private http:HttpClient
   ){}
get(url:any,data:any){
    data = new HttpParams({
        fromObject:data
      });
    return this.http.get<any>(environment.apiUrl + url,{ params:data}).toPromise();
   }

   getUser(url:any){
    return this.http.get<any>(environment.apiUrl + url).toPromise();
   }
// post(url:any,data:any){
//     const body = new HttpParams({
//         fromObject:data
//       });
//     return this.http.post<any>(environment.apiUrl + url,body).toPromise();
//    }
 post(url:any, data:any, formData = false) {
    if(!formData) {
      data = new HttpParams({
        fromObject: data
      });
    }
    return this.http.post<any>(environment.apiUrl + url, data).toPromise();
  }

   put(url:any, data:any, formData = false) {
    if(!formData) {
      data = new HttpParams({
        fromObject: data
      });
    }
    return this.http.put<any>(environment.apiUrl + url, data).toPromise();
  }

  patch(url:any, data:any, formData = false) {
    if(!formData) {
      data = new HttpParams({
        fromObject: data
      });
    }
    return this.http.patch<any>(environment.apiUrl + url, data).toPromise();
  }

  delete(url:any) {
    return this.http.delete<any>(environment.apiUrl + url).toPromise();
  }
}