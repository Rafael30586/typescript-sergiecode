let estudianteJavascript : boolean = true

if(estudianteJavascript){
    console.log('podés seguir viendo este curso')
}else{
    console.log('Primero tenés que ver el curso de javascript')
}

function jugar(juego: string):void{
    console.log(`A jugar a ${juego}`)
}

jugar('Sonic 2')

let saludo : string | null | undefined

saludo = null
console.log(`Saludo: ${saludo}`)

let squaresoft // acá typescript está infiriendo que es un any 
squaresoft = 'Final fantasy, Chrono Cross y Vagrant Story'
console.log(squaresoft)

squaresoft = 10

let programador = { // Cuando creamos esta variable con un objeto de esta manera
    nombre: 'SegieCode', // si queremos sobreescribir la variable deberemos
    tecnologias: ['React', 'Angular', 'Svelte'], // respetar los nombres de los atributos
    tomaMate: true
}

console.log(programador)

type Programador = { // Esta manera de crear tipos nos permite tipar objetos
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean // El signo de pregunta hace que la propiedad sea opcional
}

let programador2 : Programador = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    tomarMate: true
}

interface Programador2{
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean | null
}

let programador3 : Programador2 = {
    nombre: 'Rafael',
    tecnologias: ['Java', 'Spring boot', 'Angular'],    
}

function enviarCurriculum(programador: Programador | Programador2): void{
    console.log(`Este currículum es de ${programador.nombre}`)
}

enviarCurriculum(programador2)
enviarCurriculum(programador3)

class Pelicula{
    nombre: string = 'Matrix'// El signo de pregunta sirve para indicar que el atributo 
    // puede no estar inicializado
    protagonistas?: string[]
    actores?: string[] 
    proyectarEnCine(){
        console.log(`La película ${this.nombre} está siendo proyectada`)
    }
    constructor(nombre:string, protagonistas: string[], actores:string[]){
        this.nombre = nombre
        this.protagonistas = protagonistas
        this.actores = actores
    }
}

const pelicula = new Pelicula('Matrix', ['Neo', 'Morfeo', 'Trinity'],['Keanu Reeves'])

pelicula.proyectarEnCine()

console.log(pelicula)

class Sorteo<T>{
    private ticket?: T

    constructor(private nombre: string){

    }

    setTicket(ticket:T){
        this.ticket = ticket
    }

    getNumero(){
        return this.ticket
    }

    public sortear(): string{
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}

let sorteo = new Sorteo<string>('Sergie Code')
sorteo.setTicket('S7')
console.log(sorteo.sortear())