import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/clientee/cliente.component'
import { EmpleadoComponent } from './empleado/empleado.component';
import { TransferenciaInternaComponent } from './cliente/transferencia-interna/transferencia-interna.component';
import { ClientesComponent } from './cliente/clientes/clientes.component';
import { EscritorioComponent } from './cliente/escritorio/escritorio.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';

const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const empleadoModule = () => import('./empleado/empleado.module').then(x => x.EmpleadoModule);


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'empleado', loadChildren: empleadoModule },

  { path: 'cliente', component: ClientesComponent },
  { path: 'transferencia-interna', component: TransferenciaInternaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'escritorio', component: EscritorioComponent },

  { path: 'admin', component: AdminComponent },  //
  { path: 'admin', loadChildren: adminModule }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
