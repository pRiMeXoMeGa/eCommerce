import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login Page', },
  { path: 'signup', component: SignUpComponent, title: 'SignUp Page', },
  { path: 'admin', component: AdminPageComponent, title: 'Admin Page', 
    children: [
              {
                path: 'Products',
                component: ViewProductsComponent
              },
              {
                path:'details/:id',
                component: ProductDetailsComponent
              },
              {
                path:'editDetails',
                title: 'Admin Page | Update Product',
                component: NewProductComponent
              },
              {
                path:'newProduct',
                title: 'Admin Page | Add Product',
                component: NewProductComponent
              }

              // {
              //   path:'details/:id',
              //   component: ProductDetailsComponent
              // }
    ]
  },
  { path: 'home', component:HomeComponent,
    children: [

          {
              path: 'product',
              component: ProductComponent
          },
          {
            path: 'details/:id',
            component: DetailsComponent
          },
          {
            path: 'cart',
            component: CartComponent
          }
          ]
  },
        { path: '**', component: PageNotFoundPageComponent }  
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
