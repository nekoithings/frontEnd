export class MascotaModel {
    constructor(
      public id: string | null = null,  // El campo id será null al crear una nueva mascota
      public nombre: string = '',
      public edad: string = '',
      public raza: string = '',
      public genero: string = '',
      public estado: string = ''
    ) {}
}
