import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/components/auth-service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit,OnDestroy {
  isLoggedInSubscription:Subscription | undefined
  MatSidenav:any
  @ViewChild(MatSidenav)sidenav!:MatSidenav
  url:any
  // routeState: { [k: string]: any; } | undefined;
  data: any;
  // sidenav!:any
 // sidenav!:boolean;
  constructor(private observer:BreakpointObserver,private router:Router,private service:AuthService){}
  ngOnInit(): void {
    this.isLoggedInSubscription =  this.service.isLoggedIn$.subscribe(isLoggedIn=>{
      debugger;
      if(isLoggedIn){
        this.router.navigate(['/admin'])

      }

    })
  }

  ngOnDestroy(){
    this.isLoggedInSubscription?.unsubscribe();
  }
     
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
   // debugger;
    // if (this.router.getCurrentNavigation()?.extras.state) {
    //   this.routeState = this.router.getCurrentNavigation()?.extras.state;
    //   if (this.routeState) {
    //     this.data.frontEnd = this.routeState['frontEnd']
    //       ? JSON.parse(this.routeState['frontEnd'])
    //       : '';
    //     this.data.site = this.routeState['site'] ? this.routeState['site'] : '';
    //   }
    // }

    // this.route.queryParams.subscribe(params => {
    //   debugger;
    //   console.log(params)
    //   //this.userWithRole.user = JSON.parse(params["user"]);
    // });
  //}
  // loggedIn(){
  //   this.service.isLoggedIn().subscribe((res)=>{
      
  //   })
  // }
  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close()
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    })
  }
}

