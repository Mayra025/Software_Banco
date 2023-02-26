//Empleado crea Cuenta
import { Component, OnInit, Input } from '@angular/core';
import { CuentaB } from '../../models/cuenta';
import axios from 'axios';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmpleadoService } from '../service/empleado.service';

@Component({
  selector: 'app-ecrear-cuenta',
  templateUrl: './ecrear-cuenta.component.html',
  styleUrls: ['./ecrear-cuenta.component.css'],
  providers: [EmpleadoService]
})
export class EcrearCuentaComponent implements OnInit {
  title = "Crear";
  @Input() objR: string;
  public cta: CuentaB;
  public clientes: any;

  opcion: number = 11;
  public error: string = "";
  public success: string = "";


  constructor(private _router: Router, private _EmpleadoService: EmpleadoService) {
    this.cta = new CuentaB(null, '', '', 0, false)

    this._EmpleadoService.getClientes().subscribe(resp=>{
      this.clientes = resp.data;
    },err => {
      this._router.navigate(['/login']);
    })
  }

  ngOnInit(): void {

  }

  onSubmit(formCta: NgForm) {

    this._EmpleadoService.addCuenta({
      clientes: formCta.value.id,
      tipo: formCta.value.tipo
    }).subscribe(resp=>{
      this.error = "";
      this.success = "Cuenta creada"
    }, err=>{
      this.error = err.error.message;
      this.success = ""
    })

  }

}

