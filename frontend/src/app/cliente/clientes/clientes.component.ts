import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Config, Menu } from '../../ui/menu-acordeon/types';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public data:any;
  public cuentas:any
  public cuentaid:any
  public bancos:any

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
    }).catch(err => {
      this._router.navigate(['/empleado-login']);
    })

    axios.get("http://localhost:8080/api/cliente/bancos", {withCredentials: true}).then(resp => {
      this.bancos = resp.data;
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

   // signle open mode
   options: Config = { multi: false };
  
   menus: Menu[] = [
    { 
      name: 'Dashboard',
      iconClass: 'fa fa-code',
      active: true,
      submenu: [
        { name: 'Home', url: 'http://localhost:4200/cliente/#informacion', id:1  },
      ]
    },{ 
       name: 'Cuentas',
       iconClass: 'fa fa-code',
       active: false,
       submenu: [
         { name: 'Mi cuenta', url: '#', id:1  },
         { name: 'Transferencia Interna', url: '#', id:1  },
         { name: 'Transferencia Externa', url: 'http://localhost:4200/cliente/#transferencias-externas', id:1  }
       ]
     },
     { 
       name: 'Configuración',
       iconClass: 'fa fa-globe',
       active: false,
       submenu: [
         { name: 'Cambiar estilo', url: '#', id:0  }
       ]
     }
   ];



  ngOnInit(): void {
  }

}
