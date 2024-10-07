import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../shared/usuarios.models';
import { UsuarioService } from '../shared/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']  
})
export class EditarUsuariosComponent implements OnInit {
  idUsuario = '';
  usuario = new UsuarioModel('', '', '', '', '', '');  

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.idUsuario = this.route.snapshot.params['idUsuario'];
    console.log(`El idUsuario es ${this.idUsuario}`);

    if (this.idUsuario) {
      // Editar usuario existente
      console.log('La solicitud viene de Editar');
      this.usuarioService.obtenerUsuario(this.idUsuario).subscribe({
        next: data => {
          console.log(data);
          this.usuario = data;
          console.log(this.usuario);
        },
        error: err => {
          console.log(`Error al obtener el usuario: ${err}`);
        }
      });
    } else {
      console.log('La solicitud viene de Nuevo Usuario');
    }
  }

  onSubmit() {
    console.log("On Submit");

    if (this.usuario.id) {
      // Editar usuario existente
      this.usuarioService.actualizarUsuario(this.usuario).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/usuarios']);
        },
        error: err => {
          console.log(`Error al actualizar el usuario: ${err}`);
        }
      });
    } else {
      // Agregar nuevo usuario
      const nuevoUsuario: Partial<UsuarioModel> = { ...this.usuario, id: undefined };  

      this.usuarioService.agregarUsuario(nuevoUsuario as UsuarioModel).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/usuarios']);
        },
        error: err => {
          console.log(`Error al agregar el usuario: ${err}`);
        }
      });
    }
  }

  // Nueva función goHome
  goHome() {
    this.router.navigate(['/']);  // Redirigir a la página de inicio
  }
}
