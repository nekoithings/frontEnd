import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditarMascotasComponent } from './editar-mascotas.component';
import { MascotaService } from '../shared/mascota.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EditarMascotasComponent', () => {
  let component: EditarMascotasComponent;
  let fixture: ComponentFixture<EditarMascotasComponent>;
  let mockMascotaService: any;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockMascotaService = jasmine.createSpyObj(['obtenerMascota', 'actualizarMascota', 'agregarMascota']);
    mockActivatedRoute = {
      snapshot: { params: { idMascota: '1' } }
    };

    await TestBed.configureTestingModule({
      declarations: [EditarMascotasComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],  // Importa los módulos necesarios
      providers: [
        { provide: MascotaService, useValue: mockMascotaService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with mascota data when editing', () => {
    mockMascotaService.obtenerMascota.and.returnValue(of({
      id: '1',
      nombre: 'Firulais',
      edad: '3',
      raza: 'Golden Retriever',
      genero: 'Macho',
      estado: 'Sano'
    }));

    component.ngOnInit();

    expect(component.idMascota).toBe('1');
    expect(mockMascotaService.obtenerMascota).toHaveBeenCalledWith('1');
    expect(component.mascota.nombre).toBe('Firulais');
  });

  it('should call agregarMascota when creating a new pet', () => {
    component.idMascota = '';  // Simular que no es una edición
    component.mascota.nombre = 'Toby';
    component.onSubmit();

    expect(mockMascotaService.agregarMascota).toHaveBeenCalled();
  });

  it('should call actualizarMascota when editing an existing pet', () => {
    component.mascota.id = '1';  // Simular que ya existe una mascota
    component.onSubmit();

    expect(mockMascotaService.actualizarMascota).toHaveBeenCalled();
  });
});
