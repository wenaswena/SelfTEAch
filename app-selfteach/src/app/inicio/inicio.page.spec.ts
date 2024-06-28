import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioPresentacionPage } from './inicio.page';

describe('InicioPage', () => {
  let component: InicioPresentacionPage;
  let fixture: ComponentFixture<InicioPresentacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPresentacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
