import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LUsuarioPage } from './l-usuario.page';

describe('LUsuarioPage', () => {
  let component: LUsuarioPage;
  let fixture: ComponentFixture<LUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
