import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserportalComponent } from './userportal/userportal.component';
import { LoginComponent  } from './login/login.component';
import{AuthguardGuard} from'./authguard.guard';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: LoginComponent 
  },
  {
    path: 'user',
    canActivate:[AuthguardGuard],
    component: UserportalComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
