import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/auth-service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  
  error:string | null= null;
 formDetails: FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder,private service:AuthService,private route:Router){}


  ngOnInit(): void {
    this.formDetails = this.fb.group({
      email:['',Validators.required],
      name:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
      
    });
    console.log( this.formDetails);
  }

  submitFrom(){
    
  }

}
