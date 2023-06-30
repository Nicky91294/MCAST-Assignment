import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  API_BASE="http://localhost:3000/products/"

  getAll(){
    return this.http.get<Product[]>(this.API_BASE+'find');
  }

  getProductbyName(name:string){
    return this.http.get<Product>(`${this.API_BASE}name/${name}`)

  }

  getBrands(){
    return this.http.get<Product[]>(`${this.API_BASE}brand`)
  }
  getProductbyBrand(brand:string){
    return this.http.get<Product[]>(`${this.API_BASE}brand/${brand}`)
  }

  getCategory(){
    return this.http.get<Product[]>(`${this.API_BASE}category`)
  }

  getProductbyCategory(category:string){
    return this.http.get<Product[]>(`${this.API_BASE}category/${category}`)
  }

  createNewProduct(product: Product){
    // return this.http.post('${this.API_Base}/new', student)
    return this.http.post(this.API_BASE+'/new', product)
    
  }
  
  updateProduct(product: Product){
    return this.http.patch(`${this.API_BASE}/update`, product) 
  }

  deleteProduct(name:string){
    return this.http.delete(this.API_BASE+'/delete/'+name)
  }
}
