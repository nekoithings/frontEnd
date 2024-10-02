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

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarios = this.usuarioService.obtenerUsuarios();
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
