import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product-page',
  templateUrl: './new-product-page.component.html',
  styleUrls: ['./new-product-page.component.scss']
})
export class NewProductPageComponent implements OnInit{
  brands!: Product[];
  categories!:Product[];

  productFormGroup = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    model:new FormControl(''),
    imageUrl: new FormControl('none'),
    category:new FormControl(''),
    price:new FormControl('')
  });

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
      this.productService.getBrands().subscribe((data)=>this.brands=data)
      this.productService.getCategory().subscribe((data)=>this.categories=data)
  }

  onSubmit(){
    var temp = this.productFormGroup.value as Product;
    this.productService.createNewProduct(temp).subscribe();
  }
}
