export class UsuarioModel {
  constructor(
    public id: string | null = null,
    public nombre: string = '',
    public apellido: string = '',
    public correo_electronico: string = '',
    public telefono: string | null = null,
    public direccion: string | null = null,
  ) {}
}
