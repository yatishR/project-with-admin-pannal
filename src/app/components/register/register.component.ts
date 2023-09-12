import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  error:string | null= null;
 formDetails: FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder,private service:AuthService,private route:Router){}
 
  ngOnInit(): void {
    this.formDetails = this.fb.group({
      email:['',Validators.required],
      name:['',Validators.required],
      mobile:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
      
    });
    console.log( this.formDetails);
  }

  submitFrom():void{
    // this.service.registerUser(this.formDetails.value).subscribe(res=>{

    // }
    this.service.register(this.formDetails.value).then(data=>{
      console.log(data)
      this.route.navigate(['/login']);
      // next:(data:any)=>{
      //  console.log(data)
      // }
    //   next:(currentUser)=>{
    //     console.log('currentUser',currentUser)
    //     this.error = '';
    //     this.formDetails.reset();
          //this.service.setUserData(data.token)
    //     this.service.setCurrentUser(currentUser);
    //   },error:(err:HttpErrorResponse)=>{
    //     console.log('err',err.error)
    //     this.error = err.error.join(', ')
    //   }
    }).catch(e=>{
      console.log(e)
    })
  }
}
