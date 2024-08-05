import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HerosectionComponent } from './components/herosection/herosection.component';
import { CompanyinfosliderComponent } from './components/companyinfoslider/companyinfoslider.component';


@NgModule({
  declarations: [
    RegisterComponent,
    NavbarComponent,
    HerosectionComponent,
    CompanyinfosliderComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
