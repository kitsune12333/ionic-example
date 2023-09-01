import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el nombre de usuario de los datos del estado de la página de ingreso
    this.username = this.activatedRoute.snapshot.params['username'];
    console.log("Valor obtenido desde URL: ",this.username);
  }
}