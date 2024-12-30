import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RUsuarioPage } from './r-usuario.page';

describe('RUsuarioPage', () => {
  let component: RUsuarioPage;
  let fixture: ComponentFixture<RUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
