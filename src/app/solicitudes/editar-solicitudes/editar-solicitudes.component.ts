import { Component, OnInit } from '@angular/core';
import { SolicitudAdopcionModel } from '../shared/solicitudes.models';
import { SolicitudAdopcionService } from '../shared/solicitudes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-solicitudes',
  templateUrl: './editar-solicitudes.component.html',
  styleUrls: ['./editar-solicitudes.component.css']
})
export class EditarSolicitudesComponent implements OnInit {

  idSolicitud = '';
  solicitud = new SolicitudAdopcionModel();  // Inicializa la solicitud

  constructor(
    private solicitudService: SolicitudAdopcionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.idSolicitud = this.route.snapshot.params['idSolicitud'];
    console.log(`El idSolicitud es ${this.idSolicitud}`);

    if (this.idSolicitud) {
      // Editar solicitud existente
      console.log('La solicitud viene de Editar');
      this.solicitudService.obtenerSolicitud(this.idSolicitud).subscribe({
        next: data => {
          console.log(data);
          this.solicitud = data;
        },
        error: err => {
          console.log(`Error al obtener la solicitud: ${err}`);
        }
      });
    } else {
      console.log('La solicitud viene de Nueva Solicitud');
    }
  }

  onSubmit() {
    console.log("On Submit");

    if (this.solicitud.id) {
      // Editar solicitud existente
      this.solicitudService.actualizarSolicitud(this.solicitud).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/solicitudes']);
        },
        error: err => {
          console.log(`Error al actualizar la solicitud: ${err}`);
        }
      });
    } else {
      // Agregar nueva solicitud
      const nuevaSolicitud: Partial<SolicitudAdopcionModel> = { ...this.solicitud, id: undefined };

      this.solicitudService.agregarSolicitud(nuevaSolicitud as SolicitudAdopcionModel).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/solicitudes']);
        },
        error: err => {
          console.log(`Error al agregar la solicitud: ${err}`);
        }
      });
    }
  }

  // Nueva función goHome
  goHome() {
    this.router.navigate(['/']);  // Redirigir a la página de inicio
  }
}
