import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { FormControl, FormGroup } from '@angular/forms';
import {LoginSignupComponent} from 'src/app/pages/login-signup/login-signup.component'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  products!: Product[];
  prolez!: LoginSignupComponent["rolez"];


  searchFormGroup = new FormGroup({
    name: new FormControl <string> ('')
  });
 
  
  constructor(
    private productService: ProductService,
    ){}
  
    ngOnInit(): void {
      this.getData();
      this.name();
    }
  // filteredOptions: Observable<string[]>;
  // ngOnInit(): void {
  //   this.getData();
  // }

  getData(){
    this.productService
      .getAll()
      .subscribe((data)=> (this.products = data))
  }

  name(){
    return localStorage.getItem('role')
  }

  // onSearch(){
  //   var temp = this.searchFormGroup.value as Product;
  // this.productService.getProductbyName(temp.name).subscribe();
  // }

  

}
