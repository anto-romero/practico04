/*la capa de persistencia se encarga de interactuar con el sist. de almacenamiento
de datos. 
-interfaz de persisntencia(tareasDataSource.mjs) define los metodos que cualquier
implementacion de persistencia debe seguir,asegurando que cualqquier fuente de datos mantenga
la misma interfaz de comunicacion
-implementacion concreta (tareaRepository.mjs) implementa la interfaz para manejas
la persistencia usando un archivo de txt. */

//definimos una clase abstracta que actua como interfaz para la persistencia de datos
export default class TareaDataSource {
  //metodo abstracto para obtener todas las tareas
  obtenerTodas() {
    throw new Error("Este método debe ser implementado por la subclase");
  }

  //metodo abstracto para guardar todas las tareas
  guardar(tareas) {
    throw new Error("Este método debe ser implementado por la subclase");
  }

  //metodo abstracto para eliminar una tarea por su ID
  eliminar(id) {
    throw new Error("Este método debe ser implementado por la subclase");
  }
}

/*la clase TareaDataSource define los metodos clave que cualquier clase de 
persistencia concreta debe implementar. */