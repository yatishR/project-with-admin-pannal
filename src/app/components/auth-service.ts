import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiService } from "../service/api-service";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { CurrentUserInterFace } from "../types/current-user-interface";
import { filter, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
    currentUser$ = new BehaviorSubject<CurrentUserInterFace | null | undefined>(undefined)
    isLoggedIn$ = this.currentUser$.pipe(filter(currentuser=>currentuser!==undefined),map(Boolean));
    
    constructor(private http:HttpClient,private api:ApiService){

    }

    // getCurrentUser():Observable<CurrentUserInterFace>{
    //   const url = environment.apiUrl+"/user"
    //    return this.http.get<CurrentUserInterface>(url)
    // }

    setCurrentUser(currentUser:CurrentUserInterFace | null):void{
      this.currentUser$.next(currentUser);
    }

    async register(formValue:any){
        const data = {
          email:formValue.email,
          password:formValue.password,
          name:formValue.name,
          phone:formValue.mobile,
          type:'user',
          status:'active'
  
        }
  
        /*when you are using urlencoded bodyParser */
        
        console.log(data,"service");
        try{
         const response = await this.api.post('/user/signup',data)
         console.log(response);
         return response;
        }catch(e){
         throw(e)
        }
  
       }
  

    // isLoggedIn(){
    //   localStorage.getItem('token');
    // }

    async login(data:any){
        const dataobj = {
          email:data.email,
          password:data.password,
  
        }
  
        /*when you are using urlencoded bodyParser */
        
        console.log(data,"service");
        try{
        return await this.api.get('/user/login',data)
        //  debugger;
        // // this.setUserData(response?.token)
        //  console.log(response);
        //  return response;
        }catch(e){
         throw(e)
        }
       }
       setToken(currentUser:any):void{
        localStorage.setItem('token',currentUser)
       }

   async getAllUser(){
    try{
      return await this.api.getUser('/user/user',)
      }catch(e){
       throw(e)
      }
   }


   async deletUser(param:any){
    try{
      return await this.api.delete('/user/delete/' + param._id)
      }catch(e){
       throw(e)
      }
   }
      //  async setUserData(token:any){
      //   localStorage.setItem('token',token)
      //  }

}