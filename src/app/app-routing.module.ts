import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importa tu componente Home
import { ListaMascotasComponent } from './mascotas/lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './mascotas/editar-mascotas/editar-mascotas.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component'; // Componente para listar usuarios
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component'; // Componente para editar usuarios
import { ListaTiposMascotasComponent } from './tipos_mascotas/lista-tipos_mascotas/lista-tipos_mascotas.component'; // Componente para listar tipos de mascotas
import { EditarTipoMascotaComponent } from './tipos_mascotas/editar-tipos_mascotas/editar-tipos_mascotas.component'; // Componente para editar tipos de mascotas
import { EditarSolicitudesComponent } from './solicitudes/editar-solicitudes/editar-solicitudes.component'; // Componente para editar solicitudes de adopción
import { SolicitudAdopcionListaComponent } from './solicitudes/lista-solicitudes/lista-solicitudes.component'; // Componente para listar tipos de mascotas

const routes: Routes = [
  { path: '', component: HomeComponent }, // Redirige a HomeComponent en la ruta por defecto
  { path: 'mascotas', component: ListaMascotasComponent },
  { path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent },
  { path: 'mascotas/agregar', component: EditarMascotasComponent },
  { path: 'tipos-mascotas', component: ListaTiposMascotasComponent }, // Ruta para listar tipos de mascotas
  { path: 'tipos-mascotas/editar/:idTipoMascota', component: EditarTipoMascotaComponent }, // Ruta para editar un tipo de mascota
  { path: 'tipos-mascotas/agregar', component: EditarTipoMascotaComponent }, // Ruta para agregar un nuevo tipo de mascota
  { path: 'usuarios', component: ListaUsuariosComponent }, // Ruta para listar usuarios
  { path: 'usuarios/editar/:idUsuario', component: EditarUsuariosComponent }, // Ruta para editar un usuario
  { path: 'usuarios/agregar', component: EditarUsuariosComponent }, // Ruta para agregar un nuevo usuario
  { path: 'solicitudes', component: SolicitudAdopcionListaComponent }, // Ruta para listar solicitudes de adopción
  { path: 'solicitudes/editar/:idSolicitud', component: EditarSolicitudesComponent }, // Ruta para editar una solicitud de adopción
  { path: 'solicitudes/agregar', component: EditarSolicitudesComponent }, // Ruta para agregar una nueva solicitud de adopción
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige a Home si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
