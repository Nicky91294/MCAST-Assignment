import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }
  API_BASE="http://localhost:3000/categories/"

  getAllCategories(){
    return this.http.get<Category[]>(this.API_BASE);
  }

  newCategory(category:Category){
    if(category.category == null){
      throw new Error();
    }else{
      return this.http.post(this.API_BASE+'/newCategory', category);
    }
  }

  deleteCategory(category:Category){
    return this.http.delete(this.API_BASE+'/deleteCategory/'+category)
  }
}
