import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user!: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el usuario logueado desde el localStorage
    this.user = JSON.parse(localStorage.getItem('user') ||'{}');
  }
  ngDoCheck() {
    const updatedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (JSON.stringify(this.user) !== JSON.stringify(updatedUser)) {
      this.user = updatedUser;
    }
  }
}