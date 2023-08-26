import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoDeUsuarioPage } from './ingreso-de-usuario.page';

describe('IngresoDeUsuarioPage', () => {
  let component: IngresoDeUsuarioPage;
  let fixture: ComponentFixture<IngresoDeUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoDeUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
