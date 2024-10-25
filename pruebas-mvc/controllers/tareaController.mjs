import {
  listarTareas,
  listarTareasCompletadas,
  crearTarea,
  completarTarea,
  eliminarTarea,
} from "../services/tareaService.mjs";

import {
  renderizarListaTareas,
  renderizarMensaje,
} from "../views/tareaVista.mjs";

export function listarTareasController(req, res) {
  const tareas = listarTareas();
  res.send(JSON.parse(renderizarListaTareas(tareas)));
}

export function listarTareasCompletadasController(req, res) {
  const tareasCompletadas = listarTareasCompletadas();
  res.send(JSON.parse(renderizarListaTareas(tareasCompletadas)));
}

export function crearTareaController(req, res) {
  const { id, titulo, descripcion, completado } = req.body;
  crearTarea(id, titulo, descripcion, completado);
  res.send(JSON.parse(renderizarMensaje("Tarea creada con éxito")));
}

export function completarTareaController(req, res) {
  const { id } = req.params;
  completarTarea(parseInt(id));
  res.send(JSON.parse(renderizarMensaje("Tarea marcada como completada")));
}

export function eliminarTareaController(req, res) {
  const { id } = req.params;
  eliminarTarea(parseInt(id));
  res.send(JSON.parse(renderizarMensaje("Tarea eliminada con éxito")));
}
