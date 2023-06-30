import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  product!: Product;
  name!: string;
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
    private productService: ProductService,
    private route: ActivatedRoute){
      this.route.paramMap.subscribe(
        (pMap)=> this.name = pMap.get('name')!
      )}
  
      ngOnInit(): void {
        this.productService.getProductbyName(this.name).subscribe((product)=> this.product=product)
        this.productService.getBrands().subscribe((data)=>this.brands=data)
        this.productService.getCategory().subscribe((data)=>this.categories=data)  
      }

      onUpdate(){
        var temp = this.productFormGroup.value as Product;
        this.productService.updateProduct(temp).subscribe();
      }

}
