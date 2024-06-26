import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesaNivelPage } from './desa-nivel.page';

describe('DesaNivelPage', () => {
  let component: DesaNivelPage;
  let fixture: ComponentFixture<DesaNivelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesaNivelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
