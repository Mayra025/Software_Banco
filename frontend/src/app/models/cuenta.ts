import { ClienteB } from "./cliente";

export class CuentaB {
    constructor(
        public clis: ClienteB[],
        public id: string,
        public tipo: string,
        public estado: boolean,
    ) {
    }
}