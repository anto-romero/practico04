/**El servicio se encarga de llamar a la capa de persistencia (repositorio)
 para obtener la lista completa de tareas almacenadas. No realiza ninguna
 modificacion o procesamiento adicional sonbre los datos. Aqui es donde se toman
 decisiones como validar datos, filtrar listas, o aplicar reglas de negocio. Recibe 
 dolicitudes del controlador, ejecuta la logica y luego devuelvo los resultados
 al controlador para ser enviados como respuesta al cliente*/

//importa la capa de persistencia(repositorio)
import TareaRepository from "../repository/tareaRepository.mjs";
import Tarea from "../models/tarea.mjs";

//instancia el repositorio para manejar las tareas
const tareaRepo = new TareaRepository();

//servicio para obtener todas las tareas
export function listarTareas() {
  //obtiene todas las tareas desde la capa de persistencia
  return tareaRepo.obtenerTodas();
}

//servicio para obtener solo las tareas completadas
export function listarTareasCompletadas(req, res) {
  const tareas = tareaRepo.obtenerTodas();
  //filtra las tareas completadas
  return tareas.filter((tarea) => tarea.completado);
}

export function crearTarea(id, titulo, descripcion, completado = false) {
  //obtiene todas las tareas
  const tareas = tareaRepo.obtenerTodas();
  //crea una nueva instancia del modelo tarea
  const nuevaTarea = new Tarea(id, titulo, descripcion, completado);
  //valida que la tarea tenga un titulo valido
  nuevaTarea.validar();
  //añade la nueva tarea a la lista tareas
  tareas.push(nuevaTarea);
  //guarda la lista actualizada de tareas en el archivo
  tareaRepo.guardar(tareas);
}

//servicio para marcar una tarea como completada
export function completarTarea(id) {
  const tareas = tareaRepo.obtenerTodas();
  //encuentra la tarea por ID
  const tarea = tareas.find((tarea) => tarea.id === id);
  // si la tarea existe, la marca como completada
  if (tarea) {
    tarea.completar();
    //guarda los cambios en el archivo
    tareaRepo.guardar(tareas);
  }
}

//servicio para eliminar una tarea
export function eliminarTarea(id) {
  //obtiene todas las tareas
  let tareas = tareaRepo.obtenerTodas();
  //elimina la tarea que coincida con el id
  tareas = tareas.filter((tarea) => tarea.id !== id);
  tareaRepo.guardar(tareas);
}
