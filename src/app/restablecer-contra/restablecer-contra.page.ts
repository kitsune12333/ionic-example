import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IngresoPage } from '../models/ingreso-page.model';

@Component({
  selector: 'app-restablecer-contra',
  templateUrl: './restablecer-contra.page.html',
  styleUrls: ['./restablecer-contra.page.scss'],
})
export class RestablecerContraPage {
  username!: string;

  listUser: IngresoPage[] = [
    new IngresoPage(
      0,
      'benjabox',
      'tortuga',
      'tortuguita@duocuc.cl',
      '3344556699',
      'profesor',
      'Benjamin Salas',
      'Ing. Informatica'
    ),
    new IngresoPage(
      1,
      'smsg',
      'silversito',
      'smsg@gmail.com',
      '59602655',
      'alumno',
      'Sebastian Sepulveda',
      'Ing. Informatica'
    ),
  ];

  constructor(private router: Router) {}
  ngOnInit() {}
  recuperar() {
    console.log(this.username);
    for (let i = 0; i < this.listUser.length; i++) {
      if (this.username == this.listUser[i].username) {
        this.router.navigate(['/ingreso-de-usuario']);
        break;
      } else {
        // Mostrar mensaje de error
        console.log('usuario no encontrado');
      }
    }
  }
}