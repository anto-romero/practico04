import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import SuperheroesDataSource from "./superheroesDataSource.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class SuperheroesRepository extends SuperheroesDataSource {
  constructor() {
    super();
    this.filePath = path.join(__dirname, "../superheroes.txt");
  }

  obtenerTodos(){
    const data = fs.readFileSync(this.filePath, "utf-8");
    //convierte el JSON en un array de objetos js
    return JSON.parse(data);
  }
}