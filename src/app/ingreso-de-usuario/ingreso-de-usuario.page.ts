import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { IUserLogin } from '../models/IUserLogin';
import { IngresoPage } from '../models/IngresoPage';


@Component({
  selector: 'app-ingreso-de-usuario',
  templateUrl: './ingreso-de-usuario.page.html',
  styleUrls: ['./ingreso-de-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule]})
export class IngresoDeUsuarioPage implements OnInit {

username!: string;
password!: string;

 listUser: IngresoPage[] = [
  new IngresoPage(0, 'benjabox', 'tortuga', 'benjabox1@duocuc.cl', '56655784', 'profesor'),
  new IngresoPage(1, 'incugod', 'marmota', 'be.salasm@gmail.com', '65565784', 'alumno'),
 ];

 userLoginModal: IUserLogin = {
  username: '',
  password: ''
};

  constructor(private router: Router) {}
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
        if(this.listUser[i].tipo_de_usuario == 'profesor'){
          let sendInfo = this.router.navigate(['/home'], userInfoSend);
          return true;
        }else{
          let sendInfo = this.router.navigate(['/home'], userInfoSend);
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