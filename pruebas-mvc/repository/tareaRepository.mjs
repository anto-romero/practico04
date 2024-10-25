/*Este archivo contiene la implementacion concreta que utiliza archivos de txt
para almacenar y recuperar tareas. */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import TareaDataSource from "./tareasDataSource.mjs";
import Tarea from "../models/tarea.mjs";

//obtener la ruta del archivo de tareas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../tareas.txt");

//implementacion concreta que extiende la interfaz tareasDataSource
export default class TareaRepository extends TareaDataSource {
  constructor() {
    super();
  }

  //implementacion del metodo obtenertodas ()
  obtenerTodas() {
    try {
      //leert el archivo de txt en formato utf-8
      const data = fs.readFileSync(filePath, "utf-8");
      //convertir el contenido del archivo en un array json
      const tareas = JSON.parse(data);
      //convertir cada tarea en una instancia de la clase tarea
      return tareas.map(
        (tareaData) =>
          new Tarea(
            tareaData.id,
            tareaData.titulo,
            tareaData.descripcion,
            tareaData.completado
          )
      );
    } catch (error) {
      //si ocurre un error, devolvemos un array vacio
      console.error("Error al leer el archivo de tareas: ", error);
      return [];
    }
  }

  // implementacion del metodo guardar ()
  guardar(tareas) {
    try {
      const data = JSON.stringify(tareas, null, 2);
      fs.writeFileSync(filePath, data, "utf-8");
    } catch (error) {
      console.error("Error al guardar las tareas:", error);
    }
  }

  //implementacion del metodo eliminar()
  eliminar(id) {
    try {
      const tareas = this.obtenerTodas();
      const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
      this.guardar(tareasActualizadas);
    } catch {
      console.error("Error al eliminar la tarea: ", error);
    }
  }
}
