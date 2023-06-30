import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../model/product';
import { Brand } from '../model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }
  API_BASE="http://localhost:3000/brands/"

  getAllBrands(){
    return this.http.get<Brand[]>(this.API_BASE);
  }

  newBrand(brand:Brand){
    if(brand.brand == null){
      throw new Error();
    }else{
      return this.http.post(this.API_BASE+'/newBrand', brand);
    }
  }

  deleteBrand(brand:Brand){
    return this.http.delete(this.API_BASE+'/deleteBrand/'+brand)
  }
}
