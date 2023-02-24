import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component'
import { EmpleadoComponent } from './empleado/empleado.component';
import { EcrearClienteComponent } from './ecrear-cliente/ecrear-cliente.component';
import { EcrearCuentaComponent } from './ecrear-cuenta/ecrear-cuenta.component';
import { TransferenciaInternaComponent } from './transferencia-interna/transferencia-interna.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';

const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'cliente', component: ClientesComponent },
  { path: 'ecrear-cliente', component: EcrearClienteComponent },
  { path: 'ecrear-cuenta', component: EcrearCuentaComponent },
  { path: 'transferencia-interna', component: TransferenciaInternaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'escritorio', component: EscritorioComponent },
  { path: 'cuenta', component: CuentaComponent },

  { path: 'admin', component: AdminComponent },  //
  { path: 'admin', loadChildren: adminModule }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
