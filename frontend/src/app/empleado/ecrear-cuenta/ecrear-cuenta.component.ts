//Empleado crea Cuenta
import { Component, OnInit, Input } from '@angular/core';
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
  title = "Crear";
  @Input() objR: string;
  public cta: CuentaB;
  public clientes: any;

  opcion: number = 11;
  public error: string = "";
  public success: string = "";


  constructor(private _router: Router) {
    this.cta = new CuentaB(null, '', '', 0, false)

    axios.get("http://localhost:8080/api/empleado/clientes", { withCredentials: true }).then(resp => {
      this.clientes = resp.data;
    }).catch(err => {
      this._router.navigate(['/login']);
    })
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

}

