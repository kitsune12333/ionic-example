export class IngresoPage {
    constructor(
      public id: number,
      public username: string,
      public password: string,
      public correo: string,
      public telefono: string,
      public tipo_usuario: string
    ) {}

    static crearUsuario(event: {
      username: string,
      password: string
  }){
      return {
          name: event.username,
      }
  }
  }