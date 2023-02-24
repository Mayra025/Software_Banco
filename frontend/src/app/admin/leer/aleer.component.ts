//Admin crea: Banco y Empleado

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { BancoB } from 'src/app/models/banco';
import axios from 'axios';

import { Router } from '@angular/router';
import { CuentaB } from 'src/app/models/cuenta';


@Component({
    selector: 'app-aleer',
    templateUrl: './aleer.component.html'
})

export class AleerComponent implements OnInit {
    title = "Leer";
    @Input() objR: string;
    public cta: CuentaB;


    public usuario: Usuario;  //empleado
    public banco: BancoB;


    //public clientesD: ClienteB[] = [];

    opcion: number = 2;
    public error: string = "";
    public success: string = "";


    constructor(
        private _router: Router,


    ) {
    }

    ngOnInit(): void {

    }


}
