import { Injectable } from '@angular/core';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class BannerServiceService {

  constructor(private api:ApiService) { }

  async addBanner(formData:any) {
    try {
      const data = await this.api.post('/banner/productFile', formData,true);
      return data;
    } catch(e) {
      throw(e);
    }
  }
  async getBanners() {
    // try {
    //   const data: Banner[] = await this.api.get('banner/banners');
    //   return data;
    // } catch(e) {
    //   throw(e);
    // }
  }
}
