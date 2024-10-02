import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudAdopcionModel } from '../shared/solicitudes.models';
import { SolicitudAdopcionService } from '../shared/solicitudes.service';

@Component({
  selector: 'app-solicitud-adopcion-lista',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class SolicitudAdopcionListaComponent implements OnInit {
  solicitudes: Observable<SolicitudAdopcionModel[]> | undefined;

  constructor(private solicitudService: SolicitudAdopcionService) {}

  ngOnInit() {
    this.solicitudes = this.solicitudService.obtenerSolicitudes();
  }

  borrarSolicitud(idSolicitud: string | null) {
    console.log(`ID de la solicitud a borrar: ${idSolicitud}`);

    if (confirm("¿Estás seguro de que quieres eliminar esta solicitud?")) {
      this.solicitudService.borrarSolicitud(idSolicitud!).subscribe({
        next: () => {
          console.log(`Solicitud Eliminada`);
          this.ngOnInit(); // Vuelve a cargar la lista de solicitudes
        },
        error: err => {
          console.log(`Error al eliminar la solicitud: ${err}`);
        }
      });
    }
  }
}
