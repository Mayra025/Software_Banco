import { Usuario } from "./usuario";

export class ClienteB extends Usuario {
    constructor(
        public provincia: string,
        public ciudad: string,
        public codigo: string,
        public estado: boolean,
    ) {
        super('', '', '', '', '', "");
    }
}