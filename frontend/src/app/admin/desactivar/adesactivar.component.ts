//Admin desactiva: Banco y Empleado

import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';


@Component({
    selector: 'app-adesactivar',
    templateUrl: './adesactivar.component.html',
    providers: [AdminService]
})

export class AdesactivarComponent implements OnInit {
    title = "Desactivar";
    @Input() objR: string;
    empleados: any;

    dtoptions: DataTables.Settings = {};  //para tabla

    opcion: number = 4;
    public error: string = "";
    public success: string = "";


    constructor(
        private _router: Router,
        private _AdminService: AdminService
    ) {
        this._AdminService.getEmpleados().subscribe(resp=>{
            this.empleados = resp.data;
            this.empleados = this.empleados.filter((ele:any) => ele.activo===false)           
        }, err=>{
            this._router.navigate(['/login']);
        })
    }


    ngOnInit(): void {
        this.dtoptions = {
            pagingType: 'full_numbers'
        };
    }
    activar(id:string) {
        if (confirm('¿Estás seguro de querer activar?')) {
            if (this.objR == 'empleado') {
                this._AdminService.deleteEmpleado(id).subscribe(resp=>{
                    alert("Cliente activado")
                    this.error = ""
                },err=>{
                    this.error = err.error.message
                })
            }
        }
    }

}
