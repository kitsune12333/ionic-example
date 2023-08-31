import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoDeUsuarioPageRoutingModule } from './ingreso-de-usuario-routing.module';

import { IngresoDeUsuarioPage } from './ingreso-de-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoDeUsuarioPageRoutingModule
  ],
  declarations: [IngresoDeUsuarioPage]
})
export class IngresoDeUsuarioPageModule {}
