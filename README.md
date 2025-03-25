# Proyecto: API de Superhéroes
# TP4 - Sprint 1, Módulo 3 

## 📌 Descripción
Este proyecto es una API REST que permite obtener información sobre superhéroes almacenados en un archivo de texto. La API proporciona endpoints para buscar superhéroes por ID, por atributos y para listar superhéroes mayores de 30 años con ciertas condiciones.

El proyecto fue desarrollado en el marco de la **Diplomatura Universitaria en Desarrollo Web Full Stack con JavaScript**, impartida por el **Nodo Tecnológico y la Universidad de Catamarca**. 

## Tecnologías utilizadas
- **Node.js**
- **Express.js**
- **Módulos ECMAScript (ESM)**
- **Sistema de archivos (fs)** para lectura de datos

## 📡 Endpoints disponibles

### 1️⃣ Obtener un superhéroe por identificación
- **Ruta:** `GET /superheroes/id/:id`
- **Ejemplo:** `GET /superheroes/id/1`
- **Respuesta:**
  ```json
  {
    "id": 1,
    "nombre": "Superman",
    "edad": 35,
    "planetaOrigen": "Krypton",
    "poder": ["Vuelo", "Superfuerza"]
  }
  
### 2️⃣ Buscar superhéroes por atributo
- **Ruta:** `GET /superheroes/atributo/:atributo/:valor`
- **Ejemplo:** `GET /superheroes/atributo/nombre/batman`
- **Respuesta:** Lista de superhéroes cuyo atributo coincide con el valor.

### 3️⃣ Obtener superhéroes mayores de 30 años (que sean de la Tierra y tengan al menos 2 poderes)
- **Ruta:** `GET /superheroes/edad/mayorA30`
- **Respuesta:** Lista de superhéroes cuyo atributo coincide con el valor.


## 🎓 Alumna
Debora Abigail Zurita Rojo
