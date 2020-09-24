import Producto from './producto'
// Observa que importo una clase desde otro archivo.
// hacemos otro cambio para ver el correo del autor
var miPro = new Producto()

// Defino el prototipo o tipo de dato con los tipos de datos utilizados
let multiplicar: ( a: number, b: number, fun: (r: number) => void ) 
                    => void

multiplicar = (a, b, f) => a*b

// Una función que en r recibe el resultado de la función definida
multiplicar(3, 4, (r) => console.log( `Resutado: ${r}`)    )

function sumar(a: number, b: number): number {
    return (a+b) 
}

let sumar2 = (a: number, b: number): number => (a+b) 
console.log(sumar2(7,9))

let sumar3 = (a:number, b: number, f:(r:number) => void) => {
    
}


function saludar(nombre: string) {
    console.log('Hola ' + nombre);
}
  
function procesarEntradaUsuario( callback_f: (v: string) => void ) {
    let nombre = "Antonio López Pérez";
    callback_f(nombre);
}
  
procesarEntradaUsuario( saludar );