import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './_services/api.service';
import { HeaderComponent } from './header/header.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { DetailsComponent } from './details/details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    SignUpComponent,
    AppComponent,
    AdminPageComponent,
    PageNotFoundPageComponent,
    HeaderComponent,
    NewProductComponent,
    ViewProductsComponent,
    DetailsComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
