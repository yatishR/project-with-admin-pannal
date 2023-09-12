import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from '../components/header/header.component';
import { UserComponent } from '../components/user/user.component';
import { UploadFileComponent } from '../components/upload-file/upload-file.component';
import { GraphDashboardComponent } from '../components/graph-dashboard/graph-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:AdminDashboardComponent,
    children:[
      // {
      //   path:'header',
      //   component:HeaderComponent
      // },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'upload-file',
        component:UploadFileComponent
      },
      {
        path:'graph-dashboard',
        component:GraphDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
