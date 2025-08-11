class Alumno {
    //atributos
    nombre = "";
    apellido = "";
    edad;
    carrera = "";
    materias = [];

    constructor(nombre, apellido, edad, carrera, materias=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias;
    }
    //metodos
    obetenerCarrera(){
        return this.carrera;
    }
    obtenerDatos(nombre, apellido){
        return(this.nombre + this.apellido)
    }
    modificarEdad(edad){
        this.edad = edad;
    }
    agregarMateria(materias){
        this.materias = this.materias.concat(materias);
    }
    mostrarMaterias(){
        console.table(this.materias)
    }
    retornarEdad(){
        return this.edad;
    }
}

module.exports = Alumno