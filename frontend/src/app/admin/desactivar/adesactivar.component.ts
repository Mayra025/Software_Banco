//Admin desactiva: Banco y Empleado

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { BancoB } from 'src/app/models/banco';
import axios from 'axios';

import { Router } from '@angular/router';
import { CuentaB } from 'src/app/models/cuenta';


@Component({
    selector: 'app-adesactivar',
    templateUrl: './adesactivar.component.html'
})

export class AdesactivarComponent implements OnInit {
    title = "Desactivar";
    @Input() objR: string;
    bancos: any;

    dtoptions: DataTables.Settings = {};  //para tabla




    opcion: number = 4;
    public error: string = "";
    public success: string = "";


    constructor(
        private _router: Router,


    ) {
    }


    ngOnInit(): void {
        this.dtoptions = {
            pagingType: 'full_numbers'
            /*,
            searching: true,
            //  paging:false
            lengthChange: false,
            language: {
                searchPlaceholder: 'Escribir Nombre'
            }
*/
        };
    }
    activar(form: NgForm) {
        if (confirm('estás seguro de desactivarlo?')) {
        }
    }

}
