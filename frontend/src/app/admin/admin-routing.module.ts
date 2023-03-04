import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcrearComponent } from './crear/acrear.component';
import { AleerComponent } from './leer/aleer.component';
import { AactualizarComponent } from './actualizar/aactualizar.component';
import { AdesactivarComponent } from './desactivar/adesactivar.component';
const routes: Routes = [

    { path: 'acrear', component: AcrearComponent },
    { path: 'aleer', component: AleerComponent },
    { path: 'aactualizar', component: AactualizarComponent },
    { path: 'adesactivar', component: AdesactivarComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
