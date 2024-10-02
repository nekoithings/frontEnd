export class SolicitudAdopcionModel {
  constructor(
    public id: string | null = null,
    public usuario_id: string | null = null, 
    public mascota_id: string | null = null, 
    public estado: string = 'Pendiente', // Valores posibles: 'Pendiente', 'Aprobada', 'Rechazada'
    public comentarios: string = ''
  ) {}
}
