//Empleado desactiva: Cuenta y Cliente


import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';

import { Router } from '@angular/router';
import { EmpleadoService } from '../service/empleado.service';


@Component({
    selector: 'app-edesactivar',
    templateUrl: './edesactivar.component.html',
    providers: [EmpleadoService]
})

export class EdesactivarComponent implements OnInit {
    @Input() objR: string;
    clientes: any;
    cuentas: any;
    dtoptions: DataTables.Settings = {};  //para tabla



    opcion: number = 4;
    public error: string = "";
    public success: string = "";


    constructor(
        private _router: Router,
        private _EmpleadoService:EmpleadoService
    ) {
        this._EmpleadoService.getClientes().subscribe(resp=>{
            this.clientes = resp.data;
            this.clientes = this.clientes.filter((ele:any) => ele.activo===false)
        }, err=>{
            this._router.navigate(['/login']);
        })

        this._EmpleadoService.getCuentas().subscribe(resp=>{
            this.cuentas = resp.data;
            this.cuentas = this.cuentas.filter((ele:any) => ele.activo===false)
        }, err=>{
            this._router.navigate(['/login']);
        })
    }

    ngOnInit(): void {
        this.dtoptions = {
            pagingType: 'full_numbers',
            searching: false,
            paging: false,
            ordering: false,
            info: false,
            language: {
                emptyTable: "",
                zeroRecords: "",
            },
        };
    }

    activar(id:string) {
        if (confirm('¿Estás seguro de querer activar?')) {
            if (this.objR == 'cliente') {
                this._EmpleadoService.deleteCliente(id).subscribe(resp=>{
                    alert("Cliente activado")
                    this.error = ""
                    window.location.reload();
                },err=>{
                    this.error = err.error.message
                })
              

            } else {
                this._EmpleadoService.deleteCuenta(id).subscribe(resp=>{
                    alert("Cuenta activada")
                    this.error = ""
                    window.location.reload();
                },err=>{
                    this.error = err.error.message
                })
           

            }
            // this._EmpleadoService.
        }
    }

}
