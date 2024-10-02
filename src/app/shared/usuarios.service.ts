import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from './usuarios.models'; // Asegúrate de tener este modelo creado

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  BASE_URL = 'http://localhost:4000'; // Cambia esto si es necesario
  constructor(private http: HttpClient) {}

  // Lista completa de Usuarios
  obtenerUsuarios() {
    return this.http.get<UsuarioModel[]>(`${this.BASE_URL}/usuarios/buscar`);
  }

  // Buscar un usuario por ID
  obtenerUsuario(idUsuario: string) {
    return this.http.get<UsuarioModel>(`${this.BASE_URL}/usuarios/buscarId/${idUsuario}`);
  }

  // Crear un Usuario
  agregarUsuario(usuario: UsuarioModel) {
    return this.http.post<any>(`${this.BASE_URL}/usuarios/crear`, usuario);
  }

  // Actualizar un Usuario
  actualizarUsuario(usuario: UsuarioModel) {
    return this.http.put<string>(`${this.BASE_URL}/usuarios/actualizar/${usuario.id}`, usuario);
  }

  // Eliminar un Usuario
  borrarUsuario(idUsuario: string) {
    return this.http.delete<string>(`${this.BASE_URL}/usuarios/eliminar/${idUsuario}`);
  }
}
