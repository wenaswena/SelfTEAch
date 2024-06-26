import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelInfoPage } from './level-info.page';

describe('LevelInfoPage', () => {
  let component: LevelInfoPage;
  let fixture: ComponentFixture<LevelInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
