import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MascotaModel } from './mascota.models';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  BASE_URL='http://127.0.0.1:4000';
  constructor(private http: HttpClient) {
  }

  // Lista completa de Mascotas
  obtenerMascotas(){
    return this.http.get<MascotaModel[]>(`${this.BASE_URL}/mascotas/buscar`);
  }

  // Buscar una mascota por ID
  obtenerMascota(idMascota:string){
    return this.http.get<MascotaModel>(`${this.BASE_URL}/mascotas/buscarId/${idMascota}`);
  }

  // Crear una Mascota
  agregarMascota(mascota: MascotaModel){
    return this.http.post<any>(`${this.BASE_URL}/mascotas/crear`, mascota);
  }

  // Actualizar una Mascota
  actualizarMascota(mascota: MascotaModel){
    return this.http.put<string>(`${this.BASE_URL}/mascotas/actualizar/${mascota.id}`, mascota);
  }

  // Eliminar una Mascota
  borrarMascota(idMascota: string){
    return this.http.delete<string>(`${this.BASE_URL}/mascotas/eliminar/${idMascota}`);
  }
}
