import { Component, OnInit } from '@angular/core';
import { BannerServiceService } from 'src/app/service/banner-service.service';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit{
  constructor(private fileService:BannerServiceService,private dialogService :DialogService){}
  file:any
  onChange(event:any) {
    this.file = event.target.files[0];
}

ngOnInit(): void {
  
}

onUpload(){
  let postData = new FormData;
      postData.append('bannerImages', this.file, this.file.name);
      this.fileService.addBanner(postData).then(res=>{
        if(res.status){
          this.dialogService.openSuccessDialog("File Upload Successfully","success")
        }
      })
} 
}
