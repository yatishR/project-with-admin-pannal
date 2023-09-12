import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
// import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { AuthService } from './components/auth-service';
import { ApiService } from './service/api-service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './service/authInterceptor-service';
import { LogoutComponent } from './components/logout/logout.component';
import { UserComponent } from './modules/components/user/user.component';
import { DialogComponent } from './shared/common/dialog/dialog.component';
import { UploadFileComponent } from './modules/components/upload-file/upload-file.component';
import { EditUserComponent } from './modules/components/edit-user/edit-user.component';
import { GraphDashboardComponent } from './modules/components/graph-dashboard/graph-dashboard.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
// import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
// import { AuthInterceptor } from './service/authInterceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    HeaderComponent,
    LogoutComponent,
    UserComponent,
    DialogComponent,
    UploadFileComponent,
    EditUserComponent,
    GraphDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    ChartModule,
    CanvasJSAngularChartsModule,
    AgChartsAngularModule,
    MatTabsModule
    
    
    
    
  ],
  providers: [AuthService,ApiService,
      {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi: true
    },
    
  ],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
