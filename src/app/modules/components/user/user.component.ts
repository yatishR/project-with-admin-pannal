import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/components/auth-service';
import { DialogService } from 'src/app/service/dialog.service';
import { DialogComponent } from 'src/app/shared/common/dialog/dialog.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import * as XLSX from 'xlsx';

// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users:any;
  title = 'export-excel';
  fileName = 'users.xlsx';
  constructor(private service:AuthService,private dialogService:DialogService,private dialog:MatDialog){
  }
  //}
  ngOnInit():void {
    this.getUsers();
  }

  getUsers(){
    this.service.getAllUser().then(res=>{
      this.users = res;
      console.log("user",this.users)
    })
  }
 
deleteUser(param:any){
  this.service.deletUser(param).then(response=>{
    if(response.success){
      this.dialogService.openConfirmDialog("User Delete SuccessFully");
      this.getUsers();

    }
    
  })
}


  openDialogForDeleteUser(user:any){
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
          message: 'Do you want to delete the product and the associated licenses?'
      },
      panelClass:'confirm-dialog-container'
      });
       
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
          if (confirmed) {
             this.deleteUser(user);
          }
      });
  } 
  
  openDialogForEditUser(user:any){
    const dialogRef = this.dialog.open(EditUserComponent,{
      // data:{
      //     message: 'Do you want to delete the product and the associated licenses?'
      // },
      panelClass:'confirm-dialog-container'
      });
       
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
          if (confirmed) {
             this.deleteUser(user);
          }
      });
  } 

  exportUser(){
    
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.users);
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, this.fileName);
  }


}

