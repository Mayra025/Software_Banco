import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EactualizarComponent } from './actualizar/eactualizar.component';
import { EdesactivarComponent } from './desactivar/edesactivar.component';

import { EcrearClienteComponent } from './ecrear-cliente/ecrear-cliente.component';
import { EcrearCuentaComponent } from './ecrear-cuenta/ecrear-cuenta.component';
import { EleerComponent } from './leer/eleer.component';

const routes: Routes = [

    { path: 'ecrear-cliente', component: EcrearClienteComponent },
    { path: 'ecrear-cuenta', component: EcrearCuentaComponent },
    { path: 'eleer', component: EleerComponent },
    { path: 'eactualizar', component: EactualizarComponent },
    { path: 'edesactivar', component: EdesactivarComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
