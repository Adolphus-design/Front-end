import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { StorkComponent } from './stork/stork.component';

const routes: Routes = [
 {path: '', redirectTo:'home', pathMatch:"full"},
 {path: 'login', component: LoginComponent},
 {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: UserDetailsComponent},
  {path: 'stork/:code', component: UserDetailsComponent},
  {path: 'user', component: UsersComponent},
  {path: 'stork', component: StorkComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
