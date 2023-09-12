import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private service:AuthService){}
  ngOnInit(): void {
    // this.service.getAllUser().then(res=>{
    //   console.log('user',res);
    // })
  }

}
