import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DificultadesPage } from './dificultades.page';

describe('DificultadesPage', () => {
  let component: DificultadesPage;
  let fixture: ComponentFixture<DificultadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DificultadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
