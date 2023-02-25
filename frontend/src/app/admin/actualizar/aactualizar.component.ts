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
    empleados: any;
    bancos: any;


    opcion: number = 3;
    public error: string = "";
    public success: string = "";
    dtoptions: DataTables.Settings = {};  //para tabla
    dtTrigger: Subject<any> = new Subject<any>();

    constructor(
        private _router: Router,
        private service: MasterService

    ) {
        this.usuario = new Usuario('', '', '', '', '');
        this.banco = new BancoB('', '', '');


        axios.get("http://localhost:8080/api/administrador/empleados", { withCredentials: true }).then(resp => {
            this.empleados = resp.data;
        }).catch(err => {
            this._router.navigate(['/login']);
        })

        axios.get("http://localhost:8080/api/administrador/bancos", { withCredentials: true }).then(resp => {
            this.bancos = resp.data;
        }).catch(err => {
            this._router.navigate(['/login']);
        })
    }

    ngOnInit(): void {
        this.dtoptions = {
            pagingType: 'full_numbers'
        }
    }

    onSubmit(form: NgForm) {
        if (this.objR == 'empleado') {

            axios.put("http://localhost:8080/api/administrador/empleados/" + form.value.id, {
                nombre: form.value.nombre,
                apellido: form.value.apellido,
                email: form.value.email
            },
                {
                    headers: {
                        Accept: 'application/json',
                    },
                    withCredentials: true
                }).then(resp => {
                    this.error = "";
                    this.success = "Empleado actualizado"

                }).catch(err => {
                    this.error = err.response.data;
                    this.success = ""
                })
            this.usuario = new Usuario('', '', '', '', '');

        } else {

            axios.put("http://localhost:8080/api/administrador/bancos/" + form.value.id, {
                nombre: form.value.nombre,
                dominio: form.value.dominio
            },
                {
                    headers: {
                        Accept: 'application/json',
                    },
                    withCredentials: true
                }).then(resp => {
                    this.error = "";
                    this.success = "Banco actualizado"

                }).catch(err => {
                    this.error = err.response.data;
                    this.success = ""
                })
            this.banco = new BancoB('', '', '');
        }

    }


    LoadInvoice() {
        this.service.GetAllInvoice().subscribe(res => {
            this.dtTrigger.next(null);
        })
    }

    desactivar(form: NgForm) {
        if (confirm('estás seguro de desactivarlo?')) {
        
                axios.delete("http://localhost:8080/api/administrador/bancos/" + form.value.id, {

                })
                this.banco = new BancoB('', '', '');

            } 
        }
    

    editar(obj: any) {
        if (this.objR == 'empleado') {
            this.usuario = obj;
        } else {
            this.banco = obj;
        }
    }

}
