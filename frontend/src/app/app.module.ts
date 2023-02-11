import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoLoginComponent } from './empleado-login/empleado-login.component';
import { ClienteLoginComponent } from './cliente-login/cliente-login.component';
import { EcrearClienteComponent } from './ecrear-cliente/ecrear-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpleadoLoginComponent,
    ClienteLoginComponent,
    EcrearClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   //para el modulo 
    AppRoutingModule, //para el modulo de rutas
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
