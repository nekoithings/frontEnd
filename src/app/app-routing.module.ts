import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ListaMascotasComponent } from './mascotas/lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './mascotas/editar-mascotas/editar-mascotas.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component'; 
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component'; 
import { ListaTiposMascotasComponent } from './tipos_mascotas/lista-tipos_mascotas/lista-tipos_mascotas.component'; 
import { EditarTipoMascotaComponent } from './tipos_mascotas/editar-tipos_mascotas/editar-tipos_mascotas.component'; 
import { EditarSolicitudesComponent } from './solicitudes/editar-solicitudes/editar-solicitudes.component'; 
import { SolicitudAdopcionListaComponent } from './solicitudes/lista-solicitudes/lista-solicitudes.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'mascotas', component: ListaMascotasComponent },
  { path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent },
  { path: 'mascotas/agregar', component: EditarMascotasComponent },
  { path: 'tipos-mascotas', component: ListaTiposMascotasComponent }, 
  { path: 'tipos-mascotas/editar/:idTipoMascota', component: EditarTipoMascotaComponent }, 
  { path: 'tipos-mascotas/agregar', component: EditarTipoMascotaComponent }, 
  { path: 'usuarios', component: ListaUsuariosComponent }, 
  { path: 'usuarios/editar/:idUsuario', component: EditarUsuariosComponent }, 
  { path: 'usuarios/agregar', component: EditarUsuariosComponent }, 
  { path: 'solicitudes', component: SolicitudAdopcionListaComponent }, 
  { path: 'solicitudes/editar/:idSolicitud', component: EditarSolicitudesComponent }, 
  { path: 'solicitudes/agregar', component: EditarSolicitudesComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
