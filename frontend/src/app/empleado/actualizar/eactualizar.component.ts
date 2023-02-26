//Empleado actualiza: Cuenta y Cliente

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';

import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MasterService } from 'src/app/service/login.service';
import { ClienteB } from 'src/app/models/cliente';
import { CuentaB } from 'src/app/models/cuenta';
import { EmpleadoService } from '../service/empleado.service';


@Component({
    selector: 'app-eactualizar',
    templateUrl: './eactualizar.component.html',
    providers: [MasterService, EmpleadoService]
})

export class EactualizarComponent implements OnInit {
    title = "Actualizar";
    @Input() objR: string;

    public clientes: any;
    public cuentas: any;
    public updateState:boolean = false

    public cli: any;
    public cta: any;


    opcion: number = 3;
    public error: string = "";
    public success: string = "";
    dtoptions: DataTables.Settings = {};  //para tabla


    constructor(
        private _router: Router,
        private service: MasterService,
        private _EmpleadoService:EmpleadoService
    ) {
        this._EmpleadoService.getClientes().subscribe(resp=>{
            this.clientes = resp.data;
            this.clientes = this.clientes.filter((ele:any) => ele.activo===true)           
        }, err=>{
            this._router.navigate(['/login']);
        })

        this._EmpleadoService.getCuentas().subscribe(resp=>{
            this.cuentas = resp.data;
            this.cuentas = this.cuentas.filter((ele:any) => ele.activo===true)
        }, err=>{
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
            this._EmpleadoService.updateCliente({
                nombre: form.value.nombre,
                apellido: form.value.apellido,
                provincia: form.value.provincia,
                ciudad: form.value.ciudad,
                codigo_postal: form.value.codigo,
                correo: form.value.email
            }, form.value.id).subscribe(resp=>{
                this.error = "";
                this.success = "Cliente actualizado"
                this.actualizarState()
            },err=>{
                this.error = err.response.data;
                this.success = ""
            })
            this.cli = null;

        } else {
            this._EmpleadoService.updateCuenta({
                monto: form.value.monto
            }, form.value.id).subscribe(resp=>{
                this.error = "";
                this.success = "Cuenta actualizada"
                this.actualizarState()
            },err=>{
                this.error = err.response.data;
                this.success = ""
            })

            this.cta = null;
        }
        
    }

    actualizarState(){
        this.updateState = !this.updateState;
    }

    editar(obj: any) {
        if (this.objR == 'cliente') {
            this.cli = obj;
        } else {
            this.cta = obj;
            this.cta.tipo = this.cta.tipo==='C' ? 'Corriente' : 'Ahorro'
        }
        this.actualizarState()
    }

    desactivar(id:string) {
        if (confirm('¿Estás seguro de desactivarlo?')) {
            if (this.objR == 'cliente') {
                this._EmpleadoService.deleteCliente(id).subscribe(resp=>{
                    alert("Cliente desactivado")
                    this.error = ""
                },err=>{
                    this.error = err.error.message
                })
                this.cli = null;
            } else {
                this._EmpleadoService.deleteCuenta(id).subscribe(resp=>{
                    alert("Cuenta desactivada")
                    this.error = ""
                },err=>{
                    this.error = err.error.message
                })
                this.cta = null;
            }
        }
    }

}
