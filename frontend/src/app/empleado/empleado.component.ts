import { Component, OnInit, Output  } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Config, Menu } from '../ui/menu-acordeon/types';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  option:number =0;
  public data:any;


   // signle open mode
   options: Config = { multi: false };
  
   menus: Menu[] = [
    { 
      name: 'Dashboard',
      iconClass: 'fa fa-code',
      active: true,
      submenu: [

      ]
    },{ 
       name: 'Cliente',
       iconClass: 'fa fa-code',
       active: true,
       submenu: [
         { name: 'Crear', url: '#', id:1 },
         { name: 'Lista', url: '#', id:1  }
       ]
     },
     { 
       name: 'Cuentas',
       iconClass: 'fa fa-mobile',
       active: false,
       submenu: [
         { name: 'Crear', url: '#', id:2  },
         { name: 'Lista', url: '#', id:2  }
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


   ngOnInit() {
    this.options = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    // 기본 옵션
    const config = {
      // selector: '#accordion',
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    // 멀티 오픈을 허용하지 않으면 타깃 이외의 모든 submenu를 클로즈한다.
    if (!this.options.multi) {
      this.menus
        .filter((menu, i) => i !== index && menu.active)
        .forEach(menu => (menu.active = !menu.active));
    }

    // Menu의 active를 반전
    this.menus[index].active = !this.menus[index].active;
  }

  logout():void {
    axios.post("http://localhost:8080/api/logout", {}, {withCredentials: true}).then(resp => {
      window.location.reload();
    }).catch(err => {
      console.log(err);
      
    })
  }

 activarComponente(@Output() opcion:number ){
   this.option = opcion;
 }


  constructor(private _router:Router) { 
    axios.get("http://localhost:8080/api/empleado/info", {withCredentials: true}).then(resp => {
      this.data = resp.data;      
    }).catch(err => {
      this._router.navigate(['/empleado-login']);
    })

  }


}