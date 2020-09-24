import Producto from './producto'
// Observa que importo una clase desde otro archivo.
// hacemos otro cambio para ver el correo del autor
var miPro = new Producto()

let multiplicar: (a: number, b: number, fun: (r: number) => void) 
            => void

multiplicar = (a, b, callbackwu) => callbackwu(a*b)

// Una función que en r recibe el resultado de la función definida
multiplicar(3, 4, (r) => console.log(`Resutado: ${r}`)    )