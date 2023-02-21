import { Injectable } from "@angular/core";
import { EmpleadoB } from "../models/empleado";

export class EmpleadoService {
    public empleados: Array<EmpleadoB>;


    constructor() {
        this.empleados = [ ];
    }

    getEmpleados(): Array<EmpleadoB> {
        return this.empleados;
    }
}