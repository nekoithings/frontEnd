import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTiposMascotasComponent } from './lista-tipos_mascotas.component';

describe('ListaTiposMascotasComponent', () => {
  let component: ListaTiposMascotasComponent;
  let fixture: ComponentFixture<ListaTiposMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaTiposMascotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTiposMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
