//Empleado desactiva: Cuenta y Cliente


import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CuentaB } from 'src/app/models/cuenta';
import { ClienteB } from 'src/app/models/cliente';
import axios from 'axios';

import { Router } from '@angular/router';


@Component({
    selector: 'app-edesactivar',
    templateUrl: './edesactivar.component.html'
})

export class EdesactivarComponent implements OnInit {
    title = "Desactivar";
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

    onSubmit(formEmpleado: NgForm) {

        axios.post("http://localhost:8080/api/administrador/empleados", {
            nombre: formEmpleado.value.nombre,
            apellido: formEmpleado.value.apellido,
            identificacion: formEmpleado.value.id,
            email: formEmpleado.value.email
        },
            {
                headers: {
                    Accept: 'application/json',
                },
                withCredentials: true
            }).then(resp => {
                this.error = "";
                this.success = "Empleado creado"

            }).catch(err => {
                this.error = err.response.data;
                this.success = ""
            })
    }

    activar(empl: any) {
        if (confirm('estás seguro de desactivarlo?')) {
            //un empleado se desactiva???
        }
    }

}
