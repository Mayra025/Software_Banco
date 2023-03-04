import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import axios from 'axios';
import { MasterService } from '../service/login.service';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MasterService, AdminService]
})
export class AdminComponent {
  objR: string;
  option: number = 0;
  public data: any;
  public resumen:any

  constructor(
    private _router: Router, 
    private _MasterService:MasterService,
    private _AdminService:AdminService,
    ) {
    this._AdminService.getInfo().subscribe(resp=>{
      this.data = resp.data;
      this.resumen = resp.resumen;
      console.log(this.resumen);
      
    },err=>{
      this._router.navigate(['/login']);
    })

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


