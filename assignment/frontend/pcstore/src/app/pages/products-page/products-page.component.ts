import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Brand } from 'src/app/model/brand';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit{
  products!: Product[];
  brands!: Product[];
  categories!:Product[];
  cats!:Category[];
  newCategory: Category = new Category();
  brandz!: Brand[];
  newBrand: Brand = new Brand();


  productFormGroup = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    model:new FormControl(''),
    imageUrl: new FormControl('none'),
    category:new FormControl(''),
    price:new FormControl('')
  });

  lowValue: number = 0;
  highValue: number = 20;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService
    ){}
  
  ngOnInit(): void {
    this.getData();
    this.getCategoryService();
    this.getBrandService();
    // this.productService.getBrands().subscribe((data)=>this.brands=data);
    // this.productService.getCategory().subscribe((data)=>this.categories=data);
    
  }

  getData(){
    this.productService
      .getAll()
      .subscribe((data)=> (this.products = data))
  }

  getCategoryService(){
    this.categoryService.getAllCategories().subscribe((data)=>this.cats=data);
  }

  getBrandService(){
    this.brandService.getAllBrands().subscribe((data)=>this.brandz=data);
  }

  // used to build a slice of papers relevant at any given time
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
  
  getProductbyBrand(brand:any){
    this.productService.getProductbyBrand(brand).subscribe(
      (data)=>
      this.products = data
      );
      this.productFormGroup.setValue({
        brand: brand,
        name: null,
        model: null,
        imageUrl: null,
        category: null,
        price: null
      });
      this.getCategoryService();
      this.getBrandService();
  }

  getProductbyCategory(category:any){
    this.productService.getProductbyCategory(category).subscribe((data)=>(this.products = data))
  }

  submitCategory(){
    this.categoryService.newCategory(this.newCategory).subscribe(
      (data) =>{
      console.log(data);
      this.getCategoryService();
    this.getBrandService();
    });
    
  }

  submitBrand(){
    this.brandService.newBrand(this.newBrand).subscribe(
      (data) =>{
      console.log(data);
      this.getCategoryService();
      this.getBrandService();
    })
  }

  deleteCategory(category:any){
    this.categoryService.deleteCategory(category).subscribe((data) =>{
      console.log(data);
      this.getCategoryService();
      this.getBrandService();
      });
      
  }

  deleteBrand(brand:any){
    this.brandService.deleteBrand(brand).subscribe((data) =>{
      console.log(data);
      this.getCategoryService();
      this.getBrandService();
      });
      
  }


  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
}
