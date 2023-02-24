//Empleado lee: Cuenta y Cliente

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { ClienteB } from 'src/app/models/cliente';
import { CuentaB } from 'src/app/models/cuenta';
import axios from 'axios';
import { Subject } from 'rxjs';
import { MasterService } from 'src/app/service/master.service';


import { Router } from '@angular/router';

@Component({
    selector: 'app-eleer',
    templateUrl: './eleer.component.html'
})

export class EleerComponent implements OnInit {
    title = "Leer";
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
        private service: MasterService
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
        // this.LoadInvoice();


    }

    LoadInvoice() {
        this.service.GetAllInvoice().subscribe(res => {
            this.dtTrigger.next(null);
        })
    }





}
