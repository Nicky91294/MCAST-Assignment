import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { NavComponent } from './nav/nav.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NewProductPageComponent } from './pages/new-product-page/new-product-page.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'loginsignup', component: LoginSignupComponent},
  {path: 'nav', component: NavComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'product/:name', component: ProductPageComponent},
  {path: 'product/:name/details', component: ProductDetailsComponent},
  {path: 'newproduct', component: NewProductPageComponent},
  {path: 'aboutus', component: AboutusComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
