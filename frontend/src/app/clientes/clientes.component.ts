import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public data:any;
  public cuentas:any
  public cuentaid:any

  constructor(
    private _router:Router
  ){
    axios.get("http://localhost:8080/api/cliente/info", {withCredentials: true}).then(resp => {
      this.data = resp.data;
    }).catch(err => {
      this._router.navigate(['/empleado-login']);
    })

    axios.get("http://localhost:8080/api/cliente/cuentas", {withCredentials: true}).then(resp => {
      this.cuentas = resp.data;
      console.log(this.cuentas);
    }).catch(err => {
      this._router.navigate(['/empleado-login']);
    })
  }

  showCuenta(id:string):void {
    axios.get("http://localhost:8080/api/cliente/cuentas/"+id, {withCredentials: true}).then(resp => {
      this.cuentaid = resp.data;
      console.log(this.cuentaid);
      
    }).catch(err => {
      this._router.navigate(['/empleado-login']);
    })
  }

  logout():void {
    axios.post("http://localhost:8080/api/logout", {}, {withCredentials: true}).then(resp => {
      window.location.reload();
    }).catch(err => {
      console.log(err);
      
    })
  }

  ngOnInit(): void {
  }

}
