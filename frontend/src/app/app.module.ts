import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoLoginComponent } from './login/empleado-login.component';
import { ClienteLoginComponent } from './cliente-login/cliente-login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EcrearClienteComponent } from './ecrear-cliente/ecrear-cliente.component';
import { EcrearCuentaComponent } from './ecrear-cuenta/ecrear-cuenta.component';
import { TransferenciaInternaComponent } from './transferencia-interna/transferencia-interna.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { CuentaComponent } from './cuenta/cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpleadoLoginComponent,
    ClienteLoginComponent,
    EcrearClienteComponent,
    EcrearCuentaComponent,
    TransferenciaInternaComponent,
    ClientesComponent,
    ClienteComponent,
    EscritorioComponent,
    CuentaComponent
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
