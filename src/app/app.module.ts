import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RegisterComponent } from './register/register.component';
import { StorkComponent } from './stork/stork.component';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { AboutComponent } from './about/about.component';
import { AddStorkComponent } from './add-stork/add-stork.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    LoginComponent,
    UserDetailsComponent,
    MessagesComponent,
    RegisterComponent,
    StorkComponent,
    HomeComponent,
    SellComponent,
    AboutComponent,
    AddStorkComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
   /* HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
