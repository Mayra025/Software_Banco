import { Component, OnInit } from '@angular/core';
import { EmpleadoB } from '../models/empleado';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MasterService]
})
export class LoginComponent implements OnInit {
  public empl: EmpleadoB;
  public error: string

  constructor(
    private _router: Router,
    private _service: MasterService
  ) {
    this.empl = new EmpleadoB('', '', ''),
      this.error = "";
  }
  ngOnInit(): void {
  }

  onSubmit(formEl: NgForm) {
    this._service.login({
      nickname: formEl.value.usuario,
      password: formEl.value.password,
      rol: formEl.value.rol
    }).subscribe(
      resp => {
        this.error = "";
        switch (formEl.value.rol) {
          case "cliente":
            this._router.navigate(['/cliente']);
            break;
          case "empleado":
            this._router.navigate(['/empleado']);
            break;
          case "administrador":
            this._router.navigate(['/admin']);
            break;
          default:
            break;
        }
      }, err => {
        this.error = err.error.message;
      }
    )
  }
}
