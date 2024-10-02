import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAdopcionListaComponent } from './lista-solicitudes.component';


describe('ListaSolicitudesComponent', () => {
  let component: SolicitudAdopcionListaComponent;
  let fixture: ComponentFixture<SolicitudAdopcionListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitudAdopcionListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudAdopcionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
