import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error:string | null= null;
  iconname='eye-outline';
  isLogin=false;
  type:boolean = true;
  disabled = false;
  name: string | undefined;
  user:any
  constructor(private route:Router,private fb:FormBuilder,private service:AuthService){

  }

  formDetails = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });

  changetype(){
    this.type =!this.type;
  }
  loginFrom(){
    console.log(this.formDetails.value);
    if(this.formDetails.value){
      this.service.login(this.formDetails.value).then(res=>{
        this.user = res.user
        this.service.setToken(res.token)
        this.service.setCurrentUser(res.user);
        //console.log(res,"err");
        this.route.navigate(['./admin'],
        {  state: {
          frontEnd: JSON.stringify({ framwork: 'Angular', version: '14' }),
         site: 'edupala.com',
       },}
      //   state: {
      //     frontEnd: JSON.stringify({ framwork: 'Angular', version: '14' }),
      //     site: 'edupala.com',
      //   },
      // });
        // state: {
        //   //this.user:JSON.stringify({ framwork: 'Angular', version: '14' }),
        // },


        );
    })
    }
   
       
  }

}
