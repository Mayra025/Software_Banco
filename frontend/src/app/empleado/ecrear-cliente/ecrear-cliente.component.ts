import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteB } from '../../models/cliente';
import axios from 'axios';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ecrear-cliente',
  templateUrl: './ecrear-cliente.component.html',
  styleUrls: ['./ecrear-cliente.component.css']
})
export class EcrearClienteComponent {
  title = "Crear";
  @Input() objR: string;
  public cli: ClienteB;

  opcion: number = 1;
  public error: string = "";
  public success: string = "";
  public clientes: any;


  constructor(private _router: Router) {
    this.cli = new ClienteB('', '', '', false)
  }
  ngOnInit(): void {

  }

  onSubmit(formCli: NgForm) {

    axios.post("http://localhost:8080/api/empleado/clientes", {
      nombre: formCli.value.nombre,
      apellido: formCli.value.apellido,
      provincia: formCli.value.provincia,
      ciudad: formCli.value.ciudad,
      codigo_postal: formCli.value.codigo,
      identificacion: formCli.value.id,
      correo: formCli.value.email
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

  /*
    addOrEdit() {
      if (this.cli.fila == 0) {
        this.cli.fila = this.clientes.length + 1;
        this.cli.estado = true;
        this.clientes.push(this.cli);
      }
      alert("Cambio exitoso");   ////
  
      this.cli = new ClienteB(0, '', '', '', '', '', '', '', false)
    }
  
    editar(c: ClienteB) {
      this.cli = c;
  
    }
  
  
    desactivar() {
      if (confirm('estás seguro de desactivarlo?')) {
        this.cli.estado = false;
        this.cli.fila = this.clientesD.length + 1;
        this.clientesD.push(this.cli);
  
        this.clientes = this.clientes.filter(x => x != this.cli);
        this.cli = new ClienteB(0, '', '', '', '', '', '', '', false)
      }
  
    }
  
    activar(c: ClienteB) {
      if (confirm('estás seguro de activarlo?')) {
        this.cli = c;
        this.cli.estado = true;
        this.cli.fila = this.clientes.length + 1;
        this.clientes.push(this.cli);
  
  
        this.clientesD = this.clientesD.filter(x => x != this.cli);
        this.cli = new ClienteB(0, '', '', '', '', '', '', '', false)
  
      }
  
    }*/
}
