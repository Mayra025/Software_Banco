import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AccordionComponent } from './ui/menu-acordeon/menu-acordeon.component';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccordionComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,   //para el modulo 
    AppRoutingModule, //para el modulo de rutas
    HttpClientModule, BrowserAnimationsModule,
    MaterialModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
