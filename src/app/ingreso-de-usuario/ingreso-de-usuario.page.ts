import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IngresoPage } from '../models/ingreso-page.model';
Router

@Component({
  selector: 'app-ingreso-de-usuario',
  templateUrl: './ingreso-de-usuario.page.html',
  styleUrls: ['./ingreso-de-usuario.page.scss'],
})
export class IngresoDeUsuarioPage{

username!: string;
password!: string;

 listUser: IngresoPage[] = [
  new IngresoPage(0, 'benjabox', 'tortuga', 'benjabox1@duocuc.cl', '56655784', 'profesor'),
  new IngresoPage(1, 'incugod', 'marmota', 'be.salasm@gmail.com', '65565784', 'alumno'),
 ]

  constructor(private router: Router) {}
  ngOnInit() {
  }
  ingresar() {
    console.log(this.username, this.password)
    for(let i = 0; i < this.listUser.length; i++){
        if(this.username == this.listUser[i].username && this.password == this.listUser[i].password){
          this.router.navigate(['/home'], { state: { username: this.listUser[i] } });
     } else {
      // Mostrar mensaje de error
      console.log('Credenciales incorrectas');      
    }
  }
}
}