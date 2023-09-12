import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { guardServiceGuard } from './guard/auth/auth.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    //canActivate:[guardServiceGuard]
    
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'admin',
    loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule),
   // canActivate:[guardServiceGuard]
  },
  {
    path:'**',
    component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
