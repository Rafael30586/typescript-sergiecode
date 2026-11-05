"use strict";
let estudianteJavascript = true;
if (estudianteJavascript) {
    console.log('podés seguir viendo este curso');
}
else {
    console.log('Primero tenés que ver el curso de javascript');
}
function jugar(juego) {
    console.log(`A jugar a ${juego}`);
}
jugar('Sonic 2');
let saludo;
saludo = null;
console.log(`Saludo: ${saludo}`);
let squaresoft; // acá typescript está infiriendo que es un any 
squaresoft = 'Final fantasy, Chrono Cross y Vagrant Story';
console.log(squaresoft);
squaresoft = 10;
let programador = {
    nombre: 'SegieCode', // si queremos sobreescribir la variable deberemos
    tecnologias: ['React', 'Angular', 'Svelte'], // respetar los nombres de los atributos
    tomaMate: true
};
console.log(programador);
let programador2 = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    tomarMate: true
};
let programador3 = {
    nombre: 'Rafael',
    tecnologias: ['Java', 'Spring boot', 'Angular'],
};
function enviarCurriculum(programador) {
    console.log(`Este currículum es de ${programador.nombre}`);
}
enviarCurriculum(programador2);
enviarCurriculum(programador3);
class Pelicula {
    nombre = 'Matrix'; // El signo de pregunta sirve para indicar que el atributo 
    // puede no estar inicializado
    protagonistas;
    actores;
    proyectarEnCine() {
        console.log(`La película ${this.nombre} está siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
const pelicula = new Pelicula('Matrix', ['Neo', 'Morfeo', 'Trinity'], ['Keanu Reeves']);
pelicula.proyectarEnCine();
console.log(pelicula);
class Sorteo {
    nombre;
    ticket;
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getNumero() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Sergie Code');
sorteo.setTicket('S7');
console.log(sorteo.sortear());
