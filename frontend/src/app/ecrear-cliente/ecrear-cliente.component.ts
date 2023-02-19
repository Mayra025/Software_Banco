import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteB } from '../models/cliente';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecrear-cliente',
  templateUrl: './ecrear-cliente.component.html',
  styleUrls: ['./ecrear-cliente.component.css']
})
export class EcrearClienteComponent {
  public cli: ClienteB;
  opcion:number =1;
  public error:string = "";
  public success:string = "";


  constructor(private _router:Router) {
    this.cli = new ClienteB('', '', '', '', '','','')
  }
  ngOnInit(): void {

  }
  
  onSubmit(formCli: NgForm) {

    axios.post("http://localhost:8080/api/empleado/clientes", {
        apellido: formCli.value.apellido,
        ciudad: formCli.value.ciudad,
        codigo_postal: formCli.value.codigo,
        correo: formCli.value.email,
        identificacion: formCli.value.id,
        nombre: formCli.value.nombre,
        provincia: formCli.value.provincia,
    },{
      headers: {
        Accept: 'application/json',
      },
      withCredentials: true
    }).then(resp => {
      this.error = "";
      this.success = "Cliente creado"
      
    }).catch(err => {
      this.error = err.response.data;
      this.success = ""
    })
  }
}
