import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { ProductsComponent } from './components/products/products.component';
import { ConsultingComponent } from './components/servicepage/consulting/consulting.component';
import { DevelopmentComponent } from './components/servicepage/development/development.component';
import { ResultwritingComponent } from './components/servicepage/resultwriting/resultwriting.component';
import { TrainingComponent } from './components/servicepage/training/training.component';
import { ServicesComponent } from './components/services/services.component';


const routes: Routes = [
  {path:'',component:MainSectionComponent},
  {path:'services', component:ServicesComponent,
children:[
  {path:'',component:DevelopmentComponent},
  {path:'development',component:DevelopmentComponent},
  {path:'training',component:TrainingComponent},
  {path:'consulting',component:ConsultingComponent},
  {path:'resume-writing',component:ResultwritingComponent}
]

},
  {path:'about', component:AboutComponent},
  {path:'products', component:ProductsComponent},
  {path:'career', component:CareerComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
