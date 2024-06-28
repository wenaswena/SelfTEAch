import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoNivelPage } from './info-nivel.page';

describe('InfoNivelPage', () => {
  let component: InfoNivelPage;
  let fixture: ComponentFixture<InfoNivelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNivelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
