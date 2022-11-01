import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { Injectable, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login Page', },
  { path: 'signup', component: SignUpComponent, title: 'SignUp Page', },
  { path: 'admin', component: AdminPageComponent, title: 'Admin Page', 
    children: [
      {
        path: 'child-a', 
        title: 'child-a',
        component: LoginComponent,
      },
      {
        path: 'child-b',
        title: 'child b',
        component: SignUpComponent,  
      },
    ],
  },
  { path: 'user', component: UserPageComponent },
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
