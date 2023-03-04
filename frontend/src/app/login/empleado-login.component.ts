import { Component, OnInit } from '@angular/core';
import { EmpleadoB } from '../models/empleado';
import {NgForm} from '@angular/forms';
import axios from "axios";
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado-login',
  templateUrl: './empleado-login.component.html',
  styleUrls: ['./empleado-login.component.css']
})
export class EmpleadoLoginComponent implements OnInit {
  public empl: EmpleadoB;
  public error:string

  constructor(
    private _router:Router
  ) {
    this.empl = new EmpleadoB('', '', ''),
    this.error = "";
  }
  ngOnInit(): void {
  }

  onSubmit(formEl: NgForm) {
    
    axios.post("http://localhost:8080/api/login", {
      nickname: formEl.value.usuario,
      password: formEl.value.password,
      rol: formEl.value.rol
    },{
      headers: {
        Accept: 'application/json',
      },
      withCredentials: true
    }).then(resp => {
      this.error = "";
      if (formEl.value.rol === "cliente") {
        this._router.navigate(['/cliente']);
      }else{
        this._router.navigate(['/empleado']);
      }
    }).catch(err => {
      this.error = err.response.data;
    })
    
    // console.log(formEl.value);  // { first: '', last: '' }
    // console.log(formEl.valid);  // false
  }
}
