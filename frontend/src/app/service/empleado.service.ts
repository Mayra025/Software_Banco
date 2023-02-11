import { Injectable } from "@angular/core";
import { EmpleadoB } from "../models/empleado";

export class EmpleadoService {
    public empleados: Array<EmpleadoB>;


    constructor() {
        this.empleados = [

            new EmpleadoB("Abc", "123"),
            new EmpleadoB("dfg", "546")
        ];
    }

    getEmpleados(): Array<EmpleadoB> {
        return this.empleados;
    }
}