//Empleado desactiva: Cuenta y Cliente


import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';

import { Router } from '@angular/router';


@Component({
    selector: 'app-edesactivar',
    templateUrl: './edesactivar.component.html'
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
