import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudAdopcionModel } from './solicitudes.models';

@Injectable({
  providedIn: 'root'
})
export class SolicitudAdopcionService {

  BASE_URL = 'http://localhost:4000/solicitudes'; // Cambiar la base URL para solicitudes de adopción
  constructor(private http: HttpClient) {}

  // Lista completa de solicitudes de adopción
  obtenerSolicitudes() {
    return this.http.get<SolicitudAdopcionModel[]>(`${this.BASE_URL}/buscar`);
  }

  // Buscar una solicitud de adopción por ID
  obtenerSolicitud(idSolicitud: string) {
    return this.http.get<SolicitudAdopcionModel>(`${this.BASE_URL}/buscarId/${idSolicitud}`);
  }

  // Crear una nueva solicitud de adopción
  agregarSolicitud(solicitud: SolicitudAdopcionModel) {
    return this.http.post<any>(`${this.BASE_URL}/crear`, solicitud);
  }

  // Actualizar una solicitud de adopción
  actualizarSolicitud(solicitud: SolicitudAdopcionModel) {
    return this.http.put<string>(`${this.BASE_URL}/actualizar/${solicitud.id}`, solicitud);
  }

  // Eliminar una solicitud de adopción
  borrarSolicitud(idSolicitud: string) {
    return this.http.delete<string>(`${this.BASE_URL}/eliminar/${idSolicitud}`);
  }
}
