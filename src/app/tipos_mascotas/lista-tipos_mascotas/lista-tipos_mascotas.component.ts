import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoMascotaModel } from '../shared/tipomascota.models';
import { TipoMascotaService } from '../shared/tipomascota.service';

@Component({
  selector: 'app-lista-tipos-mascotas',
  templateUrl: './lista-tipos_mascotas.component.html',
  styleUrls: ['./lista-tipos_mascotas.component.css']
})
export class ListaTiposMascotasComponent implements OnInit {
  tiposMascotas: Observable<TipoMascotaModel[]> | undefined;

  constructor(private tipoMascotaService: TipoMascotaService) {}

  ngOnInit() {
    this.tiposMascotas = this.tipoMascotaService.obtenerTiposMascotas();
  }

  borrarTipoMascota(idTipoMascota: string | null) {
    console.log(`ID del tipo de mascota a borrar: ${idTipoMascota}`);

    if (confirm("¿Estás seguro de que quieres eliminar este tipo de mascota?")) {
      this.tipoMascotaService.borrarTipoMascota(idTipoMascota!).subscribe({
        next: () => {
          console.log(`Tipo de mascota eliminado`);
          this.ngOnInit(); // Vuelve a cargar la lista de tipos de mascotas
        },
        error: err => {
          console.log(`Error al eliminar tipo de mascota: ${err}`);
        }
      });
    }
  }
}
