import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { CleerComponent } from './cleer/cleer.component';
import { TarjetaComponent } from './ui/tarjeta/tarjeta.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { TransferenciaInternaComponent } from './transferencia-interna/transferencia-interna.component';
import { TransferenciaExternaComponent } from './transferencia-externa/transferencia-externa.component';



@NgModule({
  declarations: [
    ClientesComponent,
    CleerComponent,
    TarjetaComponent,
    TransferenciaInternaComponent,
    TransferenciaExternaComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    BrowserModule,
    FormsModule,   //para el modulo 
    HttpClientModule,
    DataTablesModule,//para tablas
  ]
})
export class ClientesModule { }
