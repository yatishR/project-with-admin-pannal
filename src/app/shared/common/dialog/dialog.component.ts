import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<DialogComponent>){}


onDismiss(){
  this.dialogRef.close(false);
}

onConfirm(){
  this.dialogRef.close(true);
}
}
