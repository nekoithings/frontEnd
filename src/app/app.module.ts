import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaMascotasComponent } from './mascotas/lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './mascotas/editar-mascotas/editar-mascotas.component';
import { MascotaService } from './shared/mascota.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component'; 
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component'; 
import { UsuarioService } from './shared/usuarios.service'; 
import { ListaTiposMascotasComponent } from './tipos_mascotas/lista-tipos_mascotas/lista-tipos_mascotas.component';
import { EditarTipoMascotaComponent } from './tipos_mascotas/editar-tipos_mascotas/editar-tipos_mascotas.component'; 
import { TipoMascotaService } from './tipos_mascotas/shared/tipomascota.service';
import { EditarSolicitudesComponent } from './solicitudes/editar-solicitudes/editar-solicitudes.component'; 
import { SolicitudAdopcionListaComponent } from './solicitudes/lista-solicitudes/lista-solicitudes.component';
import { SolicitudAdopcionService } from './solicitudes/shared/solicitudes.service'; 


@NgModule({
  declarations: [
    AppComponent,
    ListaMascotasComponent,
    EditarMascotasComponent,
    ListaUsuariosComponent, 
    EditarUsuariosComponent, 
    ListaTiposMascotasComponent, 
    EditarTipoMascotaComponent,
    SolicitudAdopcionListaComponent,
    EditarSolicitudesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    MascotaService,
    UsuarioService,
    TipoMascotaService,
    SolicitudAdopcionService,
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
