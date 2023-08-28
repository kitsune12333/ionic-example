import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IngresoPage } from '../models/ingreso-page.model';

@Component({
  selector: 'app-restablecer-contra',
  templateUrl: './restablecer-contra.page.html',
  styleUrls: ['./restablecer-contra.page.scss'],
})
export class RestablecerContraPage{

  username!: string;
  
   listUser: IngresoPage[] = [
    new IngresoPage(0, 'benjabox', 'tortuga', 'benjabox1@duocuc.cl', '56655784', 'profesor'),
    new IngresoPage(1, 'incugod', 'marmota', 'be.salasm@gmail.com', '65565784', 'alumno'),
   ]

   
  constructor(private router: Router) {}
  ngOnInit() {
  }
  recuperar() {
    console.log(this.username)
    for(let i = 0; i < this.listUser.length; i++){
        if(this.username == this.listUser[i].username){
          this.router.navigate(['/ingreso-de-usuario']);
     } else {
      // Mostrar mensaje de error
      console.log('usuario no encontrado');      
    }
  }
  }
}