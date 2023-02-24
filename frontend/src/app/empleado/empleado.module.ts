import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoRoutingModule } from './empleado-routing.module';

import { EmpleadoComponent } from './empleado.component';
import { EcrearClienteComponent } from './ecrear-cliente/ecrear-cliente.component';
import { EcrearCuentaComponent } from './ecrear-cuenta/ecrear-cuenta.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
    declarations: [
        EmpleadoComponent,
        EcrearClienteComponent,
        EcrearCuentaComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,   //para el modulo 
        EmpleadoRoutingModule, //para el modulo de rutas
        HttpClientModule,
        DataTablesModule //para tablas
    ],
    providers: [],
})
export class EmpleadoModule { }
