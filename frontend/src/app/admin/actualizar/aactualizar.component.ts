//Admin lee: Banco y Empleado

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { BancoB } from 'src/app/models/banco';
import axios from 'axios';

import { Router } from '@angular/router';
import { CuentaB } from 'src/app/models/cuenta';
import { Subject } from 'rxjs';
import { MasterService } from 'src/app/service/login.service';
import { AdminService } from '../service/admin.service';


@Component({
    selector: 'app-aactualizar',
    templateUrl: './aactualizar.component.html',
    providers: [MasterService, AdminService]
})

export class AactualizarComponent implements OnInit {
    title = "Actualizar";
    @Input() objR: string;
    public cta: CuentaB;
    public updateState: boolean = false


    public usuario: any;  //empleado
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
        private service: MasterService,
        private _AdminService: AdminService
    ) {
        this.usuario = null;
        this.banco = new BancoB('', '', '', "", "", "", "");

        this._AdminService.getEmpleados().subscribe(resp => {
            this.empleados = resp.data;
            this.empleados = this.empleados.filter((ele: any) => ele.activo === true)
        }, err => {
            this._router.navigate(['/login']);
        })

        this._AdminService.getBancos().subscribe(resp => {
            this.bancos = resp.data;
        }, err => {
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
                //searchPlaceholder: 'búsqueda'
            },
        }
    }

    onSubmit(form: NgForm) {
        console.log(form.value);

        if (this.objR == 'empleado') {
            this._AdminService.updateEmpleado({
                nombre: form.value.nombre,
                apellido: form.value.apellido,
                correo: form.value.email
            }, form.value.id).subscribe(resp => {
                this.error = "";
                this.success = "Empleado actualizado"
            }, err => {
                console.log(err);

                this.error = err.error.message;
                this.success = ""
            })
            // this.usuario = null;
        } else {
            this._AdminService.updateBanco({
                nombre: form.value.nombre,
                dominio: form.value.dominio,
                usuario: form.value.usuario,
                password: form.value.password,
                prueba: form.value.prueba,
                transferir: form.value.transferir,
            }, form.value.id).subscribe(resp => {
                this.error = "";
                this.success = "Banco actualizado"
            }, err => {
                this.error = err.error.message;
                this.success = ""
            })
            //    this.banco = new BancoB('', '', '', "", "", "", "");
        }

    }

    LoadInvoice() {
        this.service.GetAllInvoice().subscribe(res => {
            this.dtTrigger.next(null);
        })
    }

    desactivar(id: string) {
        if (confirm('¿Estás seguro de desactivarlo/Eliminarlo?')) {
            if (this.objR == 'empleado') {
                this._AdminService.deleteEmpleado(id).subscribe(resp => {
                    alert("Empleado desactivado")
                    this.error = ""
                }, err => {
                    this.error = err.error.message
                })
                this.usuario = null;
                window.location.reload();
            } else {
                this._AdminService.deleteBanco(id).subscribe(resp => {
                    alert("Banco Eliminado")
                    this.error = ""
                }, err => {
                    this.error = err.error.message
                })
                this.banco = new BancoB('', '', '', "", "", "", "");
                window.location.reload();

            }


        }
    }

    handleConnection($event, bancos?: BancoB) {
        $event.preventDefault()
        $event.target.innerHTML = "Conectando..."
        if (!bancos) {
            this._AdminService.testConnection(this.banco.dominio + this.banco.prueba).subscribe(resp => {
                $event.target.innerHTML = "Conectado"
                $event.target.style.background = "#28a745";
                setTimeout(() => {
                    $event.target.innerHTML = "Probar conexión"
                    $event.target.style.background = "#6c757d"
                }, 2000);
            }, err => {
                $event.target.innerHTML = "No hay conexión"
                $event.target.style.background = "#dc3545";
                setTimeout(() => {
                    $event.target.innerHTML = "Probar conexión"
                    $event.target.style.background = "#6c757d"
                }, 2000);
            })
        } else {
            this._AdminService.testConnection(bancos.dominio + bancos.prueba).subscribe(resp => {
                $event.target.innerHTML = "Conectado"
                $event.target.style.background = "#28a745";
                setTimeout(() => {
                    $event.target.innerHTML = "Probar conexión"
                    $event.target.style.background = "#6c757d"
                }, 2000);
            }, err => {
                $event.target.innerHTML = "No hay conexión"
                $event.target.style.background = "#dc3545";
                setTimeout(() => {
                    $event.target.innerHTML = "Probar conexión"
                    $event.target.style.background = "#6c757d"
                }, 2000);
            })
        }

    }

    actualizarState() {
        this.updateState = !this.updateState;
        this.success = "";
        this.error = "";
    }

    editar(obj: any) {
        if (this.objR == 'empleado') {
            this.usuario = obj;
        } else {
            this.banco = obj;
        }
        this.actualizarState()
    }

}
