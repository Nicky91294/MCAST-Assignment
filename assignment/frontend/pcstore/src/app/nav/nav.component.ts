import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { FormControl, FormGroup } from '@angular/forms';
import {LoginSignupComponent} from 'src/app/pages/login-signup/login-signup.component'
import { UserService } from '../services/user.service';


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
  prorole!: string | null;
  element!: HTMLElement | null
  prorolez!: string | null;
  classd!: string;
  rwold!: string;
  rwol!: string;
 
  
  constructor(
    private productService: ProductService,
    private userService: UserService

    ){}
  
    ngOnInit(): void {
      this.getData();
      this.name();
      // this.linking();

      
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
    // return localStorage.getItem('role')
    this.prorolez= localStorage.getItem('role')
    // console.log(this.prolez)
    // return this.prorolez
    
    if (this.prorolez === 'admin'){
      return this.role()
    }else{
      return this.roled()
  }
  }
  
  roled(){
    this.rwold = 'disabled'
    return this.rwold
  }

  role(){
    this.rwol = ''
    return this.rwol
  }

  // linking(){

  //   // const linkElement: HTMLAnchorElement = document.getElementById("newproduct") as HTMLAnchorElement;
  //   this.element = document.getElementById("newproduct");
  //   // let newproduct = <HTMLElement>document.getElementById("newproduct");
  //   this.prorole= localStorage.getItem('role')

  //   if (this.prorole = "admin"){
  //     this.classd=" ";
  //     return this.classd
  // }else{
  //   this.classd="disabled";
  //   return this.classd
  // }}

  // onSearch(){
  //   var temp = this.searchFormGroup.value as Product;
  // this.productService.getProductbyName(temp.name).subscribe();
  // }



}
