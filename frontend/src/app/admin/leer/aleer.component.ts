//Admin lee: Banco y Empleado

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { BancoB } from 'src/app/models/banco';
import axios from 'axios';
import { Subject } from 'rxjs';
import { MasterService } from 'src/app/service/master.service';


import { Router } from '@angular/router';

@Component({
    selector: 'app-aleer',
    templateUrl: './aleer.component.html'
})

export class AleerComponent implements OnInit {
    title = "Leer";
    @Input() objR: string;

    empleados: any;
    bancos: any;


    public usuario: Usuario;  //empleado
    public banco: BancoB;


    opcion: number = 2;
    public error: string = "";
    public success: string = "";
    dtoptions: DataTables.Settings = {};  //para tabla
    dtTrigger: Subject<any> = new Subject<any>();



    constructor(
        private _router: Router,
        private service: MasterService
    ) {
        /*
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
        */
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
        // this.LoadInvoice();


    }

    LoadInvoice() {
        this.service.GetAllInvoice().subscribe(res => {
            this.dtTrigger.next(null);
        })
    }


}
