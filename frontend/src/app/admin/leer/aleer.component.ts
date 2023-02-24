//Admin crea: Banco y Empleado

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

    //empleados: any;
    empl: any;
    public empleados: Usuario[] = [
        { id: '1234567890', nombre: 'M', apellido: 'P', email: 'djs@ek', rol: '' }
    ];
    public bancos: BancoB[] = [
        { id: '1234567890', nombre: 'M', dominio: 'hdjs' }
    ];

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
