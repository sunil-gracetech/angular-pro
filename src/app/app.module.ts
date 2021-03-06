import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GenderformatPipe } from './tools/pipes/genderformat.pipe';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CareerComponent } from './components/career/career.component';
import { TrainingComponent } from './components/servicepage/training/training.component';
import { DevelopmentComponent } from './components/servicepage/development/development.component';
import { ConsultingComponent } from './components/servicepage/consulting/consulting.component';
import { ResultwritingComponent } from './components/servicepage/resultwriting/resultwriting.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductlistComponent } from './components/productlist/productlist.component'
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentcomComponent } from './components/parentcom/parentcom.component';
import { ChildcomComponent } from './components/childcom/childcom.component';import { CustomerModuleModule } from './customer-module/customer-module.module';
@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    NavbarComponent,
    GenderformatPipe,
    ServicesComponent,
    ContactComponent,
    AboutComponent,
    CareerComponent,
    TrainingComponent,
    DevelopmentComponent,
    ConsultingComponent,
    ResultwritingComponent,
    ProductsComponent,
    ProductlistComponent,
    ParentcomComponent,
    ChildcomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ModalModule.forRoot(),
    CustomerModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
