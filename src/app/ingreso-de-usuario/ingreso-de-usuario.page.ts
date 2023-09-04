import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IngresoPage } from '../models/ingreso-page.model';
Router;

@Component({
  selector: 'app-ingreso-de-usuario',
  templateUrl: './ingreso-de-usuario.page.html',
  styleUrls: ['./ingreso-de-usuario.page.scss'],
})
export class IngresoDeUsuarioPage {
  username!: string;
  password!: string;

  listUser: IngresoPage[] = [
    new IngresoPage(
      0,
      'benjabox',
      'tortuga',
      'tortuguita@duocuc.cl',
      '12357322',
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
  ingresar() {
    let userFound = this.listUser.find(
      (user) => user.username == this.username && user.password == this.password
    );
    if (!userFound) {
      console.log('Credenciales incorrectas');
      return;
    }
    this.router.navigate(['/home']);
    //Alternativa con localStorage
    localStorage.setItem('user', JSON.stringify(userFound));
  }
}