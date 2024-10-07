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
  idSolicitud: string = ''; // Variable para almacenar el ID de la solicitud a buscar

  constructor(private solicitudService: SolicitudAdopcionService) {}

  ngOnInit() {
    this.solicitudes = this.solicitudService.obtenerSolicitudes();
  }

  // Método para borrar una solicitud de adopción
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

  // Método para buscar una solicitud por ID
  obtenerSolicitud(idSolicitud: string) {
    if (idSolicitud.trim()) {
      this.solicitudService.obtenerSolicitud(idSolicitud).subscribe({
        next: (solicitud) => {
          this.solicitudes = new Observable<SolicitudAdopcionModel[]>(observer => {
            observer.next([solicitud]);
            observer.complete();
          });
        },
        error: (err) => {
          console.log(`Error al obtener la solicitud: ${err}`);
          alert("No se encontró la solicitud con el ID proporcionado");
        }
      });
    } else {
      // Si el campo de búsqueda está vacío, recarga todas las solicitudes
      this.ngOnInit();
    }
  }
}
