import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Config, Menu } from '../ui/menu-acordeon/types';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  objR: string;
  option: number = 0;
  public data: any;



  logout(): void {
    this._router.navigate(['/login']);
    axios.post("http://localhost:8080/api/logout", {}, { withCredentials: true }).then(resp => {
      window.location.reload();
    }).catch(err => {
      console.log(err);
    })
  }

  activarComponente(@Output() opcion: number) {
    this.option = opcion;
  }

  getInputValue(inputValue: string) {
    this.objR = inputValue;
  }

  constructor(private _router: Router) {
    axios.get("http://localhost:8080/api/empleado/info", { withCredentials: true }).then(resp => {
      this.data = resp.data;
    }).catch(err => {
      this._router.navigate(['/login']);
    })

  }


}