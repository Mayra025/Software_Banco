import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../service/login.service';
import { ClienteService } from './services/cliente.services';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [MasterService, ClienteService],
})
export class ClientesComponent {
  public cuenta1:any = null
  objR: string;
  option: number = 0;
  public data: any;
  public cuentas:any;
  public ab:string = "1"

  constructor(
    private _router: Router, 
    private _MasterService:MasterService,
    private _ClienteService:ClienteService,
    ) {
    this._ClienteService.getInfo().subscribe(resp=>{
      this.data = resp.data;
    },err=>{
      this._router.navigate(['/login']);
    })

    this._ClienteService.getMisCuentas().subscribe(resp=>{
      this.cuentas = resp.data;
    },err=>{
      this._router.navigate(['/login']);
    })

  }

  setCuentaExt(cuenta:any){
    this.cuenta1 = cuenta;
  }

  getCuenta($event, cuenta:any){
    this.cuenta1 = cuenta    
    this.activarComponente(1)
  }

  recuperarCuenta(){
    return this.cuenta1;
  }

  logout(): void {
    if (confirm('¿Estás seguro que deseas salir?')) {
      this._MasterService.logout().subscribe(
        resp => {
          this._router.navigate(['/login']);
        }, err => {
          console.log(err);
        })
    }
  }

  activarComponente(@Output() opcion: number) {
    this.option = opcion;

  }

  getInputValue(inputValue: string) {
    this.objR = inputValue;
  }

}
