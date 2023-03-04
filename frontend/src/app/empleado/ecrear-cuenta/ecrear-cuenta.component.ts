//Empleado crea Cuenta
import { Component, OnInit, Input, Renderer2  } from '@angular/core';
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
  public clientesFilter: any;

  opcion: number = 11;
  public error: string = "";
  public success: string = "";
  public selectedCli:string[] = []


  constructor(private _router: Router, private _EmpleadoService: EmpleadoService, private renderer: Renderer2) {
    this.cta = new CuentaB(null, '', '', 0, false)

    this._EmpleadoService.getClientes().subscribe(resp=>{
      this.clientes = resp.data;
      this.clientesFilter = resp.data;
    },err => {
      this._router.navigate(['/login']);
    })
  }

  ngOnInit(): void {

  }

  onSubmit(formCta: NgForm) {

    this._EmpleadoService.addCuenta({
      clientes: this.selectedCli,
      tipo: formCta.value.tipo
    }).subscribe(resp=>{
      this.error = "";
      this.success = "Cuenta creada"
    }, err=>{
      this.error = err.error.message;
      this.success = ""
    })

  }

  onChange(deviceValue) {
    if (deviceValue.target.value !== "none") {
      this.selectedCli.push(deviceValue.target.value)
      this.clientesFilter = this.clientes.filter(ele => !this.selectedCli.includes(ele._id))
    }
  }

  
  handleclick(id:string){
    this.selectedCli = this.selectedCli.filter(ele => ele !== id)
    this.clientesFilter = this.clientes.filter(ele => !this.selectedCli.includes(ele._id))
  }
}

