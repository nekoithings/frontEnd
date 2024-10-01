import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MascotaModel } from '../shared/mascota.models';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {
  mascotas: Observable<MascotaModel[]> | undefined;

  constructor(private mascotaService: MascotaService) {}

  ngOnInit() {
    this.mascotas = this.mascotaService.obtenerMascotas();
  }

  borrarMascota(idMascota: string | null) {
    console.log(`ID de la mascota a borrar: ${idMascota}`); // Verificar el ID

    if (confirm("¿Estás seguro de que quieres eliminar esta mascota?")) {
      this.mascotaService.borrarMascota(idMascota!).subscribe({
        next: data => {
          console.log(`Registro Eliminado`);
          this.ngOnInit(); // Vuelve a cargar la lista de mascotas
        },
        error: err => {
          console.log(`Error al eliminar Registro ${err}`);
        }
      });
    }
  }
}
