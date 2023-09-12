import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-project';
 constructor(private service :AuthService){}
ngOnInit(): void {
  // this.service.currentUser$.subscribe(res=>{
  //   console.log(res)
  // })

  // this.service.isLoggedIn$.subscribe(isLoggedIn=>{
  // console.log('isLoggedIn',isLoggedIn);
  // })
}

}
