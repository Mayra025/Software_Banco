import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { AcrearComponent } from './crear/acrear.component';
import { AleerComponent } from './leer/aleer.component';
import { AactualizarComponent } from './actualizar/aactualizar.component';
import { AdesactivarComponent } from './desactivar/adesactivar.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AdminComponent,
    AcrearComponent, AleerComponent, AactualizarComponent, AdesactivarComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,   //para el modulo 
    AdminRoutingModule, //para el modulo de rutas
    HttpClientModule,
    DataTablesModule,//para tablas
  ],
  providers: [],
})
export class AdminModule { }
