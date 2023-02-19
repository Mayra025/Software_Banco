import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoLoginComponent } from './empleado-login/empleado-login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EcrearClienteComponent } from './ecrear-cliente/ecrear-cliente.component';
import { EcrearCuentaComponent } from './ecrear-cuenta/ecrear-cuenta.component';
import { TransferenciaInternaComponent } from './transferencia-interna/transferencia-interna.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpleadoLoginComponent,
    ClienteComponent,
    EcrearClienteComponent,
    EcrearCuentaComponent,
    TransferenciaInternaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   //para el modulo 
    AppRoutingModule, //para el modulo de rutas
    HttpClientModule, BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
