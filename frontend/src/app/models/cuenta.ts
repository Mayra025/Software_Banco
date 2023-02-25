import { ClienteB } from "./cliente";

export class CuentaB {
    constructor(
        public clis: ClienteB[],
        public id: string,
        public tipo: string,
        public monto: number,
        public estado: boolean,
    ) {
    }
}