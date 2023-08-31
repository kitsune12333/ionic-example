import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoDeUsuarioPage } from './ingreso-de-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoDeUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoDeUsuarioPageRoutingModule {}
