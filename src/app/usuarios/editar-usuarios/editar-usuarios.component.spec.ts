import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditarUsuariosComponent } from './editar-usuarios.component';
import { UsuarioService } from '../shared/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EditarUsuariosComponent', () => {
  let component: EditarUsuariosComponent;
  let fixture: ComponentFixture<EditarUsuariosComponent>;
  let mockUsuarioService: any;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockUsuarioService = jasmine.createSpyObj(['obtenerUsuario', 'actualizarUsuario', 'agregarUsuario']);
    mockActivatedRoute = {
      snapshot: { params: { idUsuario: '1' } }
    };

    await TestBed.configureTestingModule({
      declarations: [EditarUsuariosComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],  // Importa los módulos necesarios
      providers: [
        { provide: UsuarioService, useValue: mockUsuarioService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with usuario data when editing', () => {
    mockUsuarioService.obtenerUsuario.and.returnValue(of({
      id: '1',
      nombre: 'Juan',
      apellido: 'Pérez',
      correo_electronico: 'juan.perez@example.com',
      telefono: '1234567890',
      direccion: 'Calle Falsa 123'
    }));

    component.ngOnInit();

    expect(component.idUsuario).toBe('1');
    expect(mockUsuarioService.obtenerUsuario).toHaveBeenCalledWith('1');
    expect(component.usuario.nombre).toBe('Juan');
  });

  it('should call agregarUsuario when creating a new user', () => {
    component.idUsuario = '';  // Simular que no es una edición
    component.usuario.nombre = 'Pedro';
    component.onSubmit();

    expect(mockUsuarioService.agregarUsuario).toHaveBeenCalled();
  });

  it('should call actualizarUsuario when editing an existing user', () => {
    component.usuario.id = '1';  // Simular que ya existe un usuario
    component.onSubmit();

    expect(mockUsuarioService.actualizarUsuario).toHaveBeenCalled();
  });
});
