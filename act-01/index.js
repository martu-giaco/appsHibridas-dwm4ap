const Alumno = require("./alumno.js")

let nombre = "mar";
console.log("hola " + nombre);

const alumno1 = new Alumno ("mar", "giaco", 18, "DW");

alumno1.modificarEdad(19);
console.log(alumno1.edad);

alumno1.agregarMateria("Aplicaciones Híbridas");
console.log(alumno1.materias);