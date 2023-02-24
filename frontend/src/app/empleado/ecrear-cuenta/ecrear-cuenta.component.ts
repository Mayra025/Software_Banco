import { Component, OnInit } from '@angular/core';
import { CuentaB } from '../../models/cuenta';
import axios from 'axios';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ecrear-cuenta',
  templateUrl: './ecrear-cuenta.component.html',
  styleUrls: ['./ecrear-cuenta.component.css']
})
export class EcrearCuentaComponent implements OnInit {
  public cta: CuentaB;
  public cuentasD: CuentaB[] = [];

  opcion: number = 2;
  public error: string = "";
  public success: string = "";
  public clientes: any;

  public cuentas: CuentaB[] = [
    { fila: 1, id: '1234567890', nombre: 'M', apellido: 'P', tipo: 'ahorros', estado: true }
  ];

  constructor(private _router: Router) {
    this.cta = new CuentaB(0, '', '', '', '', false)
    /*
        axios.get("http://localhost:8080/api/empleado/clientes", {withCredentials: true}).then(resp => {
          this.clientes = resp.data;      
        }).catch(err => {
          this._router.navigate(['/empleado-login']);
        })*/
  }
  ngOnInit(): void {

  }

  onSubmit(formCta: NgForm) {

    axios.post("http://localhost:8080/api/empleado/cuentas", {
      clientes: formCta.value.id,
      tipo: formCta.value.tipo
    }, {
      headers: {
        Accept: 'application/json',
      },
      withCredentials: true
    }).then(resp => {
      this.error = "";
      this.success = "Cuenta creada"

    }).catch(err => {
      this.error = err.response.data;
      this.success = ""
    })
  }



  addOrEdit() {
    if (this.cta.fila == 0) {
      this.cta.fila = this.cuentas.length + 1;
      this.cta.estado = true;
      this.cuentas.push(this.cta);
    }
    alert("Cambio exitoso");   ////

    this.cta = new CuentaB(0, '', '', '', '', false)
  }

  editar(c: CuentaB) {
    this.cta = c;

  }


  desactivar() {
    if (confirm('estás seguro de desactivarla?')) {
      this.cta.estado = false;
      this.cta.fila = this.cuentasD.length + 1;
      this.cuentasD.push(this.cta);

      this.cuentas = this.cuentas.filter(x => x != this.cta);
      this.cta = new CuentaB(0, '', '', '', '', false)
    }

  }

  activar(c: CuentaB) {
    if (confirm('estás seguro de activarla?')) {
      this.cta = c;
      this.cta.estado = true;
      this.cta.fila = this.cuentas.length + 1;
      this.cuentas.push(this.cta);


      this.cuentasD = this.cuentasD.filter(x => x != this.cta);
      this.cta = new CuentaB(0, '', '', '', '', false)

    }

  }
}

