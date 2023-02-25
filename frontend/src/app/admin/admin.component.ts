import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  objR: string;
  option: number = 0;
  public data: any;



  logout(): void {
    this._router.navigate(['/login']);
    /*axios.post("http://localhost:8080/api/logout", {}, { withCredentials: true }).then(resp => {
      window.location.reload();
    }).catch(err => {
      console.log(err);

    })*/
  }

  activarComponente(@Output() opcion: number) {
    this.option = opcion;

  }

  getInputValue(inputValue: string) {
    this.objR = inputValue;
  }

  constructor(private _router: Router) {


  }
}


