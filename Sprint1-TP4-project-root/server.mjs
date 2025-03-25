import express from 'express';
import { 
  buscarSuperheroesPorAtributoController, 
  obtenerSuperheroesMayoresDe30Controller, 
  obtenerSuperheroesPorIDController 
} from './controllers/superheroesController.mjs';

const app = express();
const port = 3005;

// Rutas

// Recibe un ID de superhéroe y devuelve los datos de ese superhéroe
app.get('/superheroes/id/:id', obtenerSuperheroesPorIDController);

// Recibe un "atributo y un valor", devuelve una lista de superhéroes 
// que cumplen con el criterio.
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);

// Devuelve una lista de superhéroes mayores de 30 años que  
// además sean del planeta Tierra y tengan al menos 2 poderes.
app.get('/superheroes/edad/:mayorA30', obtenerSuperheroesMayoresDe30Controller);


// Levanta el servidor y lo pone a la escucha en el puerto 3005.
app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});
