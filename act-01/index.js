const Alumno = require("./alumno.js")

let nombre = "mar";
console.log("hola " + nombre);

const alumno1 = new Alumno ("mar", "giaco", 18, "DW");

alumno1.obtenerCarrera();
alumno1.obtenerDatos();

alumno1.modificarEdad(19);
console.log(alumno1.edad);

alumno1.agregarMateria("Aplicaciones Híbridas");
alumno1.agregarMateria("Internet de las Cosas");
alumno1.agregarMateria("Clientes Web Mobile");
console.log(alumno1.materias);

alumno1.mostrarMaterias();
alumno1.retornarEdad();