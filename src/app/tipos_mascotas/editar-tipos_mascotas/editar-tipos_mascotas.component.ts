import { Component, OnInit } from '@angular/core';
import { TipoMascotaModel } from '../shared/tipomascota.models';
import { TipoMascotaService } from '../shared/tipomascota.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tipos-mascota',
  templateUrl: './editar-tipos_mascotas.component.html',
  styleUrls: ['./editar-tipos_mascotas.component.css']  // Asegúrate de que esté bien escrito (styleUrls en plural)
})
export class EditarTipoMascotaComponent implements OnInit {

  idTipoMascota = '';
  tipoMascota = new TipoMascotaModel();  // Inicializa el modelo

  constructor(
    private tipoMascotaService: TipoMascotaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.idTipoMascota = this.route.snapshot.params['idTipoMascota'];
    console.log(`El idTipoMascota es ${this.idTipoMascota}`);

    if (this.idTipoMascota) {
      // Editar tipo de mascota existente
      console.log('La solicitud viene de Editar');
      this.tipoMascotaService.obtenerTipoMascota(this.idTipoMascota).subscribe({
        next: data => {
          console.log(data);
          this.tipoMascota = data;
          console.log(this.tipoMascota);
        },
        error: err => {
          console.log(`Error al obtener el tipo de mascota: ${err}`);
        }
      });
    } else {
      console.log('La solicitud viene de Nuevo Tipo de Mascota');
    }
  }

  onSubmit() {
    console.log("On Submit");

    if (this.tipoMascota.id) {
      // Editar tipo de mascota existente
      this.tipoMascotaService.actualizarTipoMascota(this.tipoMascota).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/tipos-mascotas']);
        },
        error: err => {
          console.log(`Error al actualizar el tipo de mascota: ${err}`);
        }
      });
    } else {
      // Agregar nuevo tipo de mascota
      const nuevoTipoMascota: Partial<TipoMascotaModel> = { ...this.tipoMascota, id: undefined };  // Usar Partial<TipoMascotaModel>

      this.tipoMascotaService.agregarTipoMascota(nuevoTipoMascota as TipoMascotaModel).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/tipos-mascotas']);
        },
        error: err => {
          console.log(`Error al agregar el tipo de mascota: ${err}`);
        }
      });
    }
  }

  // Nueva función goHome
  goHome() {
    this.router.navigate(['/']);  // Redirigir a la página de inicio
  }
}
