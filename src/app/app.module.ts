import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddempComponent } from './addemp/addemp.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ViewallComponent } from './viewall/viewall.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
const myRoute:Routes=[{
  path:"",
  component:AdminLoginComponent
},
{path:"add",
 component:AddempComponent
},
{
  path:"search",
  component:SearchEmployeeComponent
},
{
  path:"delete",
  component:DeleteEmployeeComponent
},
{
  path:"view",
  component:ViewallComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddempComponent,
    SearchEmployeeComponent,
    DeleteEmployeeComponent,
    ViewallComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
