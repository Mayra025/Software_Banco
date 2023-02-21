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
  opcion: number = 1;
  public error: string = "";
  public success: string = "";

  /*public clientes: any;*/

  public clientes: ClienteB[] = [
    { fila:1,id: '123456789', nombre: 'M', apellido: 'P', provincia: 'P', ciudad: 'Q', codigo: 'qsd3', email: 'djs@ek' }
  ];


  constructor(private _router: Router) {
    this.cli = new ClienteB(0,'', '', '', '', '', '', '')
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
    }, {
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


  addOrEdit() {

    if (this.cli.fila == 0) {
      this.cli.fila=this.clientes.length +1;
      this.clientes.push(this.cli);
    }
    this.cli = new ClienteB(0,'', '', '', '', '', '', '')
  }

  editar(c: ClienteB) {
    this.cli = c;
  }


  desactivar(){
    if (confirm('estás seguro de desactivarlo?')){
      this.clientes=this.clientes.filter(x=> x!= this.cli);
      this.cli = new ClienteB(0,'', '', '', '', '', '', '')
    }
   
  }


}
