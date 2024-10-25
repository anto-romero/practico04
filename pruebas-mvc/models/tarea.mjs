export default class Tarea {
  constructor(id, titulo, descripcion, completado = false) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completado = completado;
  }

  //metodo para marcar una tarea como completa
  completar() {
    this.completado = true;
  }

  validar() {
    if (!this.titulo || this.titulo.trim() === "") {
      throw new Error("El titulo de la tarea es obligatorio.");
    }
  }
}
