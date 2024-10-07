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
  idBuscar: string = '';  // Variable para almacenar el ID de la mascota que se desea buscar
  mascotaEncontrada: MascotaModel | null = null;  // Para almacenar la mascota encontrada por ID

  constructor(private mascotaService: MascotaService) {}

  ngOnInit() {
    this.obtenerMascotas(); // Cargar la lista de todas las mascotas
  }

  // Método para obtener la lista de todas las mascotas
  obtenerMascotas() {
    this.mascotas = this.mascotaService.obtenerMascotas();
  }

  // Método para buscar una mascota por ID
  buscarMascota() {
    if (this.idBuscar.trim() === '') {
      alert('Por favor ingresa un ID válido');
      this.mascotaEncontrada = null; // Restablecer mascota encontrada
      return;
    }

    this.mascotaService.obtenerMascota(this.idBuscar).subscribe({
      next: (mascota: MascotaModel) => {
        this.mascotaEncontrada = mascota;  // Almacena la mascota encontrada
        console.log('Mascota encontrada:', this.mascotaEncontrada);
        this.mascotas = new Observable<MascotaModel[]>((observer) => {
          observer.next([mascota]); // Actualiza la lista con la mascota encontrada
          observer.complete();
        });
      },
      error: (err) => {
        console.error(`Error al buscar la mascota con ID ${this.idBuscar}: ${err}`);
        alert('No se encontró la mascota con ese ID');
        this.mascotaEncontrada = null; // Restablecer mascota encontrada
      }
    });
  }

  // Método para borrar una mascota
  borrarMascota(idMascota: string | null) {
    console.log(`ID de la mascota a borrar: ${idMascota}`); // Verificar el ID

    if (confirm("¿Estás seguro de que quieres eliminar esta mascota?")) {
      this.mascotaService.borrarMascota(idMascota!).subscribe({
        next: () => {
          console.log(`Registro Eliminado`);
          this.obtenerMascotas(); // Vuelve a cargar la lista de mascotas
        },
        error: (err) => {
          console.log(`Error al eliminar Registro: ${err}`);
        }
      });
    }
  }
}
