const Alumno = require("./alumno.js");
const fs  = require("fs/promises");
const path = "notas.txt";

const leerArchivo = async () =>{
    const data = await fs.readFile(path);
    console.log(data.toString());
}

const guardar = async (texto) => {
    await fs.writeFile(path, texto);
}

// const fn = async() {
//     await leerArchivo();
//     await guardar("escribiendo desde node");
// }

leerArchivo();
guardar("escribiendo desde node");

let nombre = "mar";
console.log("hola " + nombre);

const alumno1 = new Alumno ("mar", "giaco", 18, "DW");

console.log(alumno1.obtenerCarrera());
console.log(alumno1.obtenerDatos());

alumno1.modificarEdad(19);
console.log(alumno1.edad);

alumno1.agregarMateria("Aplicaciones Híbridas");
alumno1.agregarMateria("Internet de las Cosas");
alumno1.agregarMateria("Clientes Web Mobile");
console.log(alumno1.materias);

alumno1.mostrarMaterias()
console.log("edad: " + alumno1.retornarEdad());