import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoLoginComponent } from './empleado-login/empleado-login.component';
import { ClienteLoginComponent } from './cliente-login/cliente-login.component'
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';

const routes: Routes = [
  { path: 'cliente-login', component: ClienteLoginComponent },
  { path: 'empleado-login', component: EmpleadoLoginComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'cliente', component: ClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
