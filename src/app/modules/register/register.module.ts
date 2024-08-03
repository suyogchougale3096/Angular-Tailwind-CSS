import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HerosectionComponent } from './components/herosection/herosection.component';


@NgModule({
  declarations: [
    RegisterComponent,
    NavbarComponent,
    HerosectionComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
