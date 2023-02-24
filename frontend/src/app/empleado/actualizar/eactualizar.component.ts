//Empleado actualiza: Cuenta y Cliente

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CuentaB } from 'src/app/models/cuenta';
import { ClienteB } from 'src/app/models/cliente';
import axios from 'axios';

import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MasterService } from 'src/app/service/master.service';


@Component({
    selector: 'app-eactualizar',
    templateUrl: './eactualizar.component.html'
})

export class EactualizarComponent implements OnInit {
    title = "Actualizar";
    @Input() objR: string;

    public clientes: any;
    public cuentas: any;
    public cli: any;

    public cta: any;


    opcion: number = 3;
    public error: string = "";
    public success: string = "";
    dtoptions: DataTables.Settings = {};  //para tabla
    dtTrigger: Subject<any> = new Subject<any>();

    constructor(
        private _router: Router,
        private service: MasterService

    ) {
    }

    ngOnInit(): void {
        this.dtoptions = {
            pagingType: 'full_numbers'
        }
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


    LoadInvoice() {
        this.service.GetAllInvoice().subscribe(res => {
            this.dtTrigger.next(null);
        })
    }



    editar(empl: any) {
        //this.usuario = empl;
        //  this.router.navigateByUrl('/editinvoice/' + empl);
    }

}
