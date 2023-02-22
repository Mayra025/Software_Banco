import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  option: number = 0;
  public data: any;



  activarComponente(@Output() opcion: number) {
    this.option = opcion;
  }


  constructor(private _router: Router) {
    axios.get("http://localhost:8080/api/empleado/info", { withCredentials: true }).then(resp => {
      this.data = resp.data;
      console.log(this.data);

    }).catch(err => {
      this._router.navigate(['/empleado-login']);
    })

  }



  ngOnInit(): void {
  }

  logout(): void {
    this._router.navigate(['/empleado-login']);

    axios.post("http://localhost:8080/api/logout", {}, { withCredentials: true }).then(resp => {
      window.location.reload();
    }).catch(err => {
      console.log(err);

    })

  }

}