import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {Routes,RouterModule} from '@angular/router'
const routes:Routes=[
  {path:'', component:SigninComponent},
  {path:'signup', component:SignupComponent}

]


@NgModule({
  declarations: [UpdateprofileComponent, SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[SigninComponent]
})
export class CustomerModuleModule { }
