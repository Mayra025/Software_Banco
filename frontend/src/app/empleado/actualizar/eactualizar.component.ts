//Empleado actualiza: Cuenta y Cliente

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';

import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MasterService } from 'src/app/service/master.service';
import { ClienteB } from 'src/app/models/cliente';
import { CuentaB } from 'src/app/models/cuenta';


@Component({
    selector: 'app-eactualizar',
    templateUrl: './eactualizar.component.html'
})

export class EactualizarComponent implements OnInit {
    title = "Actualizar";
    @Input() objR: string;

    public clientes: any;
    public cuentas: any;

    public cli: ClienteB;
    public cta: CuentaB;


    opcion: number = 3;
    public error: string = "";
    public success: string = "";
    dtoptions: DataTables.Settings = {};  //para tabla


    constructor(
        private _router: Router,
        private service: MasterService

    ) {
        this.cli = new ClienteB('', '', '', false);
        this.cta = new CuentaB(null, '', '', 0, false);

        axios.get("http://localhost:8080/api/empleado/clientes", { withCredentials: true }).then(resp => {
            this.clientes = resp.data;
        }).catch(err => {
            this._router.navigate(['/login']);
        })

        axios.get("http://localhost:8080/api/empleado/cuentas", { withCredentials: true }).then(resp => {
            this.cuentas = resp.data;
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
        if (this.objR == 'cliente') {
            axios.put("http://localhost:8080/api/empleado/clientes/" + form.value.id, {
                nombre: form.value.nombre,
                apellido: form.value.apellido,
                provincia: form.value.provincia,
                ciudad: form.value.ciudad,
                codigo_postal: form.value.codigo,
                correo: form.value.email
            },
                {
                    headers: {
                        Accept: 'application/json',
                    },
                    withCredentials: true
                }).then(resp => {
                    this.error = "";
                    this.success = "Cliente actualizado"

                }).catch(err => {
                    this.error = err.response.data;
                    this.success = ""
                })
            this.cli = new ClienteB('', '', '', false);

        } else {
            //agregar clientes y agregar monto
            axios.put("http://localhost:8080/api/empleado/cuentas/" + form.value.id, {
                clientes: form.value.id,
                monto: form.value.monto
            },
                {
                    headers: {
                        Accept: 'application/json',
                    },
                    withCredentials: true
                }).then(resp => {
                    this.error = "";
                    this.success = "Cuenta actualizada"

                }).catch(err => {
                    this.error = err.response.data;
                    this.success = ""
                })
            this.cta = new CuentaB(null, '', '', 0, false);
        }

    }

    editar(obj: any) {
        if (this.objR == 'cliente') {
            this.cli = obj;
        } else {
            this.cta = obj;
        }
    }

    desactivar(form: NgForm) {
        if (confirm('estás seguro de desactivarlo?')) {
            if (this.objR == 'cliente') {
                axios.delete("http://localhost:8080/api/empleado/clientes/" + form.value.id, {

                })
                this.cli = new ClienteB('', '', '', false);

            } else {
                axios.delete("http://localhost:8080/api/empleado/cuentas/" + form.value.id, {

                })
                this.cta = new CuentaB(null, '', '', 0, false);
            }
        }
    }

}
