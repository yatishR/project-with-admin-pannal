import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/common/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialog(msg:any){
    this.dialog.open(DialogComponent,{
      width:'396px',
      height:'180px',
      disableClose:true,
      data:{
        message:msg
      },
      panelClass:'confirm-dialog-container'

    })

  }

  openSuccessDialog(msg:any,flage:any){
    this.dialog.open(DialogComponent,{
      width:'396px',
      height:'180px',
      disableClose:true,
      data:{
        message:msg,
        successFlag:flage
      },
      panelClass:'confirm-dialog-container'
    })
  }


}
