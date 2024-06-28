import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NivelDesaPage } from './nivel-desa.page';

describe('NivelDesaPage', () => {
  let component: NivelDesaPage;
  let fixture: ComponentFixture<NivelDesaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelDesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
