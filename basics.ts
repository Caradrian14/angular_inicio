// function suma(a, b) {  // funcion js
//     return a+ b
// }

// const a = suma (1, 2) // 3
// const b = suma ("b", 2) // a2

// funcion ts
function sumaTs(a: number, b:number): number {
    return a +b
}

const aTs = sumaTs (1, 2) // 3
// const bTs = sumaTs ("b", 2) // lanza error por que typescript te manda  ala verga

let a = "1"; 
a = "2" 
// a = 1 //da problemas si le cambias el tipo de 
let b:any = 3 // puede ser lo que quieras, peor no esta bien Mejor usar typescript
let c:unknown = 3; //la diferencia es que te obliga a tiparlo, en lugar de any
// let d:[number] = [1, ,2, 3, 4] // esto no va
let d:[number, number, number, number] = [1, 2, 3, 4] // esto si va

//es como un contrato que no se puede romper segun el tutotial
interface User {
    name: string
}

interface Alumno extends User {
    legajo: string
}

//no es lo mismo que las clases
const user: User = {
    // name: 1 // no va
    name: "pokemon"
}

class userClass {
    private name: string;
    
    constructor(name:string) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    setName(name:string) {
        this.name = name
    }
}

// type UserType = {
//     name: string,
//     getName: () => string,
//     setName: (name:string) => {}
// }

type UserType = User & Alumno // ha de ser las dos 
type UserTypee = User | Alumno // ha de ser uno de los dos 

// Decorador , es para extender una clase, es agregar funcionalidad extra a algo que no lo tiene.
class MyClass{
    constructor() {

    }
}
// decoradores para añadir cosas a las clases
function funcionDecardor<T extends {
    new (...args:any[]): {}
}> (constructor: T, _context: ClassDecoratorContext): T {
    return class extends constructor {
        gentleman = "yes"
    }
}

const instace = new MyClass();
console.log(instace); //Myclass{}

//metodo decorator estructura general
type methodDecooratorStructure = (
    method: Function,
    _context: ClassMethodDecoratorContext
) => PropertyDescriptor | void

// 2:29:01