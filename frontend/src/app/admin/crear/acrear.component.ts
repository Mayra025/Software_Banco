//Admin crea: Banco y Empleado

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { BancoB } from 'src/app/models/banco';
import axios from 'axios';

import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-acrear',
  templateUrl: './acrear.component.html',
  styleUrls: ['./acrear.component.css'],
  providers: [AdminService]
})

export class AcrearComponent {
  title = "Crear";
  @Input() objR: string;
  public usuario: Usuario;  //empleado
  public banco: BancoB;


  public error: string = "";
  public success: string = "";

  constructor(
    private _router: Router,
    private _AdminService:AdminService
  ) {
    this.usuario = new Usuario("",'', '', '', '', '');
    this.banco = new BancoB('', '', '', "", "", "", "");
  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    if (this.objR == 'empleado') {
      this._AdminService.addEmpleado({
        nombre: form.value.nombre,
        apellido: form.value.apellido,
        identificacion: form.value.id,
        correo: form.value.email
      }).subscribe(resp=>{
        this.error = "";
        this.success = "Empleado creado"
        this.usuario = new Usuario('', '', '', '', '', "");
      }, err=>{
        this.error = err.error.message;
        this.success = ""
      })
    } else {
      this._AdminService.addBanco({
        id: form.value.id,
        nombre: form.value.nombre,
        dominio: form.value.dominio,
        usuario: form.value.usuario,
        password: form.value.password,
        prueba: form.value.prueba,
        transferir: form.value.transferir,
      }).subscribe(resp=>{
        this.error = "";
        this.success = "Banco creado"
        this.banco = new BancoB('', '', '', "", "", "", "");
      }, err=>{
        this.error = err.error.message;
        this.success = ""
      })
    }
  }
}
