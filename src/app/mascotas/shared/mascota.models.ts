export class MascotaModel {
  constructor(
    public id: string | null = null,
    public nombre: string = '',
    public edad: string = '',
    public raza: string = '',
    public genero: string = '',
    public estado: string = '',
    public icono: string = ''  // Nuevo campo para el icono
  ) {}
}
