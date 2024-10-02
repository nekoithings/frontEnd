import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoMascotaModel } from './tipomascota.models';

@Injectable({
  providedIn: 'root'
})
export class TipoMascotaService {

  BASE_URL = 'http://localhost:4000/tipos-mascotas'; // Cambiar la base URL para tipos de mascotas
  constructor(private http: HttpClient) {}

  // Lista completa de Tipos de Mascotas
  obtenerTiposMascotas() {
    return this.http.get<TipoMascotaModel[]>(`${this.BASE_URL}/buscar`);
  }

  // Buscar un tipo de mascota por ID
  obtenerTipoMascota(idTipoMascota: string) {
    return this.http.get<TipoMascotaModel>(`${this.BASE_URL}/buscarId/${idTipoMascota}`);
  }

  // Crear un nuevo tipo de mascota
  agregarTipoMascota(tipoMascota: TipoMascotaModel) {
    return this.http.post<any>(`${this.BASE_URL}/crear`, tipoMascota);
  }

  // Actualizar un tipo de mascota
  actualizarTipoMascota(tipoMascota: TipoMascotaModel) {
    return this.http.put<string>(`${this.BASE_URL}/actualizar/${tipoMascota.id}`, tipoMascota);
  }

  // Eliminar un tipo de mascota
  borrarTipoMascota(idTipoMascota: string) {
    return this.http.delete<string>(`${this.BASE_URL}/eliminar/${idTipoMascota}`);
  }
}
