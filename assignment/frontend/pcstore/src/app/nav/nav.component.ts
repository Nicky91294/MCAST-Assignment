import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  products!: Product[];

  searchFormGroup = new FormGroup({
    name: new FormControl <string> ('')
  });
 

  
  constructor(
    private productService: ProductService,
    ){}
  
    ngOnInit(): void {
      this.getData();
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

  // onSearch(){
  //   var temp = this.searchFormGroup.value as Product;
  // this.productService.getProductbyName(temp.name).subscribe();
  // }

  

}
