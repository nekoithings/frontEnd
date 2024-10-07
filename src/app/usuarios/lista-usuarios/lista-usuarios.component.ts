import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../shared/usuarios.models';
import { UsuarioService } from '../shared/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Observable<UsuarioModel[]> | undefined;
  idBuscar: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  obtenerUsuario(idUsuario: string) {
    this.usuarioService.obtenerUsuario(idUsuario).subscribe({
      next: usuario => {
        console.log(`Usuario encontrado: `, usuario);
        // Aquí puedes manejar el usuario encontrado (por ejemplo, mostrar en un modal)
      },
      error: err => {
        console.error(`Error al buscar usuario: ${err}`);
      }
    });
  }

  borrarUsuario(idUsuario: string | null) {
    console.log(`ID del usuario a borrar: ${idUsuario}`); // Verificar el ID

    if (confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      this.usuarioService.borrarUsuario(idUsuario!).subscribe({
        next: data => {
          console.log(`Registro Eliminado`);
          this.ngOnInit(); // Vuelve a cargar la lista de usuarios
        },
        error: err => {
          console.log(`Error al eliminar Registro ${err}`);
        }
      });
    }
  }
}
