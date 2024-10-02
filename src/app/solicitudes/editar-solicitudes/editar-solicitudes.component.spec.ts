import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditarSolicitudesComponent } from './editar-solicitudes.component';
import { SolicitudAdopcionService } from '../shared/solicitudes.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EditarSolicitudesComponent', () => {
  let component: EditarSolicitudesComponent;
  let fixture: ComponentFixture<EditarSolicitudesComponent>;
  let mockSolicitudAdopcionService: any;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockSolicitudAdopcionService = jasmine.createSpyObj(['obtenerSolicitud', 'actualizarSolicitud', 'agregarSolicitud']);
    mockActivatedRoute = {
      snapshot: { params: { idSolicitud: '1' } }
    };

    await TestBed.configureTestingModule({
      declarations: [EditarSolicitudesComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: SolicitudAdopcionService, useValue: mockSolicitudAdopcionService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with solicitud data when editing', () => {
    mockSolicitudAdopcionService.obtenerSolicitud.and.returnValue(of({
      id: '1',
      usuario_id: '123',
      mascota_id: '456',
      estado: 'Pendiente',
      comentarios: 'Solicitud en espera'
    }));

    component.ngOnInit();

    expect(component.idSolicitud).toBe('1');
    expect(mockSolicitudAdopcionService.obtenerSolicitud).toHaveBeenCalledWith('1');
    expect(component.solicitud.estado).toBe('Pendiente');
  });

  it('should call agregarSolicitud when creating a new adoption request', () => {
    component.idSolicitud = '';  // Simular que no es una edición
    component.solicitud.usuario_id = '123';
    component.onSubmit();

    expect(mockSolicitudAdopcionService.agregarSolicitud).toHaveBeenCalled();
  });

  it('should call actualizarSolicitud when editing an existing adoption request', () => {
    component.solicitud.id = '1';  // Simular que ya existe una solicitud
    component.onSubmit();

    expect(mockSolicitudAdopcionService.actualizarSolicitud).toHaveBeenCalled();
  });
});
