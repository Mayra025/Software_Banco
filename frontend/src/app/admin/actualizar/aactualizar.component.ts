//Admin lee: Banco y Empleado

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { BancoB } from 'src/app/models/banco';
import axios from 'axios';

import { Router } from '@angular/router';
import { CuentaB } from 'src/app/models/cuenta';
import { Subject } from 'rxjs';
import { MasterService } from 'src/app/service/master.service';


@Component({
    selector: 'app-aactualizar',
    templateUrl: './aactualizar.component.html'
})

export class AactualizarComponent implements OnInit {
    title = "Actualizar";
    @Input() objR: string;
    public cta: CuentaB;


    public usuario: Usuario;  //empleado
    public banco: BancoB;
    public empleados: Usuario[] = [
        { id: '1234567890', nombre: 'M', apellido: 'P', email: 'djs@ek', rol: '' }
    ];
    public bancos: BancoB[] = [
        { id: '1234567890', nombre: 'M', dominio: 'hdjs' }
    ];


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

    desactivar(empl: any) {
        if (confirm('estás seguro de desactivarlo?')) {
            //un empleado se desactiva???
        }
    }

    editar(empl: any) {
        this.usuario = empl;
        //  this.router.navigateByUrl('/editinvoice/' + empl);
    }

}
