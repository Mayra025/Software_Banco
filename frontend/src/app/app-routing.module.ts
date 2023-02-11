import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoLoginComponent } from './empleado-login/empleado-login.component';
import { ClienteLoginComponent } from './cliente-login/cliente-login.component'
import { EmpleadoComponent } from './empleado/empleado.component';
import { EcrearClienteComponent } from './ecrear-cliente/ecrear-cliente.component';

const routes: Routes = [
  { path: 'cliente-login', component: ClienteLoginComponent },
  { path: 'empleado-login', component: EmpleadoLoginComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'ecrear-cliente', component: EcrearClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }