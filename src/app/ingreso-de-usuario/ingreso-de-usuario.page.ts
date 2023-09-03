import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { IUserLogin } from '../models/IUserLogin';
import { IngresoPage } from '../models/ingreso-page.model';
Router

@Component({
  selector: 'app-ingreso-de-usuario',
  templateUrl: './ingreso-de-usuario.page.html',
  styleUrls: ['./ingreso-de-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule]})
export class IngresoDeUsuarioPage implements OnInit{


 listUser: IngresoPage[] = [
  new IngresoPage(0, 'alumno', 'alumno', 'alumno@duocuc.cl', '5555555', 'alumno'),
  new IngresoPage(1, 'incugod', 'marmota', 'be.salasm@gmail.com', '5555555', 'profesor'),
 ]
  userLoginModal: IUserLogin = {
  username: '',
  password: ''
};
  constructor(private route: Router) {}
  ngOnInit() {
    this.userLoginModalRestart();
  }
  ingresar(userLoginInfo: IUserLogin): boolean{
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].username == userLoginInfo.username) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.username, this.userLoginModal.password);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }
        if(this.listUser[i].tipo_usuario == 'alumno'){
          let sendInfo = this.route.navigate(['/ingreso-de-usuario'], userInfoSend);
          return true;
        }else{
          let sendInfo = this.route.navigate(['/ingreso-de-usuario'], userInfoSend);
          return true;
        }
      }
    }
    this.userLoginModalRestart();
    return false;
    
  }

  userLoginModalRestart(): void{
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
  }
}