import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{
  
  product!: Product;
  name!: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute){
      this.route.paramMap.subscribe(
        (pMap)=> this.name = pMap.get('name')!
      )}
  
      ngOnInit(): void {
        this.productService.getProductbyName(this.name).subscribe((product)=> this.product=product)
      }

      deleteProduct(name:string){
        this.productService.deleteProduct(name).subscribe();
        
      }

}
