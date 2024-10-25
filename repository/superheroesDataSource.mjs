export default class SuperheroesDataSource {
  //metodo abstracto para obtener todos los superheroes
  obtenerTodos() {
    throw new Error("Este método debe ser implementado por la subclase");
  }
}
