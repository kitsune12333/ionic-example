import { Component, OnInit } from '@angular/core';
import { userLogin } from '../models/userLogin';
import { Router ,NavigationExtras} from '@angular/router';
Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username!: string;
  password!: string;

  listUser: userLogin[] = [
    new userLogin(1, 'benja','tortuga', 'ben@ja.com', '55555', 'usuario'),
    new userLogin(1, 'ajneb','marmota', 'jaja@ja.com', '11111', 'admin'),
  ]

  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log(this.username, this.password)
    for(let i = 0; i < this.listUser.length; i++){
        if(this.username == this.listUser[i].correo && this.password == this.listUser[i].password){
          if(this.listUser[i].tipo_usuario == 'admin'){
            console.log("admin")
            let userInfo: NavigationExtras = {
              state: {
                user: this.listUser[i]
              }
            }
            this.r.navigate(['usuario'],useraInfo)
            //navegar admin
          }else{
            //navegar
          }
        }else{
          //user not exit
        }
    }
  }

}
