import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditarTipoMascotaComponent } from './editar-tipos_mascotas.component';
import { TipoMascotaService } from '../shared/tipomascota.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EditarTipoMascotaComponent', () => {
  let component: EditarTipoMascotaComponent;
  let fixture: ComponentFixture<EditarTipoMascotaComponent>;
  let mockTipoMascotaService: any;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockTipoMascotaService = jasmine.createSpyObj(['obtenerTipoMascota', 'actualizarTipoMascota', 'agregarTipoMascota']);
    mockActivatedRoute = {
      snapshot: { params: { idTipoMascota: '1' } }
    };

    await TestBed.configureTestingModule({
      declarations: [EditarTipoMascotaComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],  // Importa los módulos necesarios
      providers: [
        { provide: TipoMascotaService, useValue: mockTipoMascotaService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTipoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with tipo de mascota data when editing', () => {
    mockTipoMascotaService.obtenerTipoMascota.and.returnValue(of({
      id: '1',
      nombre_tipo: 'Perro'
    }));

    component.ngOnInit();

    expect(component.idTipoMascota).toBe('1');
    expect(mockTipoMascotaService.obtenerTipoMascota).toHaveBeenCalledWith('1');
    expect(component.tipoMascota.nombre_tipo).toBe('Perro');
  });

  it('should call agregarTipoMascota when creating a new tipo de mascota', () => {
    component.idTipoMascota = '';  // Simular que no es una edición
    component.tipoMascota.nombre_tipo = 'Gato';
    component.onSubmit();

    expect(mockTipoMascotaService.agregarTipoMascota).toHaveBeenCalled();
  });

  it('should call actualizarTipoMascota when editing an existing tipo de mascota', () => {
    component.tipoMascota.id = '1';  // Simular que ya existe un tipo de mascota
    component.onSubmit();

    expect(mockTipoMascotaService.actualizarTipoMascota).toHaveBeenCalled();
  });
});
