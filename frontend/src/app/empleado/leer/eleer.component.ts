//Empleado lee: Cuenta y Cliente

import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { EmpleadoService } from '../service/empleado.service';
import { MasterService } from '../../service/login.service';

@Component({
    selector: 'app-eleer',
    templateUrl: './eleer.component.html',
    providers: [MasterService, EmpleadoService]
})

export class EleerComponent implements OnInit {
    @Input() objR: string;

    //public clientes: any;

    public clientes: any;
    public cuentas: any;

    opcion: number = 2;
    public error: string = "";
    public success: string = "";
    dtoptions: DataTables.Settings = {};  //para tabla
    dtTrigger: Subject<any> = new Subject<any>();



    constructor(
        private _router: Router,
        private service: MasterService,
        private _EmpleadoService: EmpleadoService
    ) {
        this._EmpleadoService.getClientes().subscribe(resp => {
            this.clientes = resp.data;
        }, err => {
            this._router.navigate(['/login']);
        })

        this._EmpleadoService.getCuentas().subscribe(resp => {
            this.cuentas = resp.data;
        }, err => {
            this._router.navigate(['/login']);
        })
    }

    ngOnInit(): void {
        this.dtoptions = {
            pagingType: 'full_numbers'
            ,
            searching: true,
            //  paging:false
            language: {
                searchPlaceholder: 'Escribir Nombre'
            }

        };
        this.LoadInvoice();


    }
    LoadInvoice() {
        this.service.GetAllInvoice().subscribe(res => {
            this.dtTrigger.next(null);
        })
    }

}
