import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el nombre de usuario de los datos del estado de la página de ingreso
    this.username = this.activatedRoute.snapshot.paramMap.get('username')!;
  }
}