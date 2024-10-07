import { Component, OnInit } from '@angular/core';
import { MascotaModel } from '../shared/mascota.models';
import { MascotaService } from '../shared/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-mascotas',
  templateUrl: './editar-mascotas.component.html',
  styleUrls: ['./editar-mascotas.component.css']  // Asegúrate que esté bien escrito (styleUrls en plural)
})
export class EditarMascotasComponent implements OnInit {

  idMascota = '';
  mascota = new MascotaModel('', '', '', '', '', '');  // Incluye todos los campos del modelo

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.idMascota = this.route.snapshot.params['idMascota'];
    console.log(`El idMascota es ${this.idMascota}`);

    if (this.idMascota) {
      // Editar mascota existente
      console.log('La solicitud viene de Editar');
      this.mascotaService.obtenerMascota(this.idMascota).subscribe({
        next: data => {
          console.log(data);
          this.mascota = data;
          console.log(this.mascota);
        },
        error: err => {
          console.log(`Error al obtener la mascota: ${err}`);
        }
      });
      
    } else {
      console.log('La solicitud viene de Nueva Mascota');
    }
  }
  selectedIcon: string = '';

  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }
  onSubmit() {
    console.log("On Submit");
  
    if (this.mascota.id) {
      // Editar mascota existente
      this.mascotaService.actualizarMascota(this.mascota).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/mascotas']);
        },
        error: err => {
          console.log(`Error al actualizar la mascota: ${err}`);
        }
      });
    } else {
      // Agregar nueva mascota
      const nuevaMascota: Partial<MascotaModel> = { ...this.mascota, id: undefined };  // Usar Partial<MascotaModel>
  
      this.mascotaService.agregarMascota(nuevaMascota as MascotaModel).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/mascotas']);
        },
        error: err => {
          console.log(`Error al agregar la mascota: ${err}`);
        }
      });
    }
  }

  // Nueva función goHome
  goHome() {
    this.router.navigate(['/']);  // Redirigir a la página de inicio
  }
}
