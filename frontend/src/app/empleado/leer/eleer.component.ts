//Empleado lee: Cuenta y Cliente

import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';
import { MasterService } from 'src/app/service/master.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-eleer',
    templateUrl: './eleer.component.html'
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
        private service: MasterService
    ) {
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
