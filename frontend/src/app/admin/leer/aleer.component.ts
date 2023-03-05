//Admin lee: Banco y Empleado

import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { BancoB } from 'src/app/models/banco';
import { Subject } from 'rxjs';
import { MasterService } from 'src/app/service/login.service';


import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
    selector: 'app-aleer',
    templateUrl: './aleer.component.html',
    providers: [MasterService, AdminService]
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
        private service: MasterService,
        private _AdminService:AdminService
    ) {
        this._AdminService.getEmpleados().subscribe(resp=>{
            this.empleados = resp.data;
        },err =>{
            this._router.navigate(['/login']);
        })

        this._AdminService.getBancos().subscribe(resp=>{
            this.bancos = resp.data;
        },err =>{
            this._router.navigate(['/login']);
        })


    }

    ngOnInit(): void {
        this.dtoptions = {
            pagingType: 'full_numbers'
        };
    }

    handleConnection($event, bancos:BancoB){
        $event.preventDefault()
        $event.target.innerHTML = "Conectando..."

        this._AdminService.testConnection(bancos.dominio+bancos.prueba).subscribe(resp=>{
            $event.target.innerHTML = "Conectado"
            $event.target.style.background = "#28a745";
            setTimeout(() => {
                $event.target.innerHTML = "Probar conexión"
                $event.target.style.background = "#6c757d"
            }, 2000);
            }, err=>{
            $event.target.innerHTML = "No hay conexión"
            $event.target.style.background = "#dc3545";
            setTimeout(() => {
                $event.target.innerHTML = "Probar conexión"
                $event.target.style.background = "#6c757d"
            }, 2000);
        })

      }

    LoadInvoice() {
        this.service.GetAllInvoice().subscribe(res => {
            this.dtTrigger.next(null);
        })
    }


}
