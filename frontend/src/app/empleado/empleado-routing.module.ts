import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EcrearClienteComponent } from './ecrear-cliente/ecrear-cliente.component';
import { EcrearCuentaComponent } from './ecrear-cuenta/ecrear-cuenta.component';
const routes: Routes = [

    { path: 'ecrear-cliente', component: EcrearClienteComponent },
    { path: 'ecrear-cuenta', component: EcrearCuentaComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
