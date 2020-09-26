class Rectangulo {
    ancho: number
    alto: number
    constructor(ancho: number, alto: number){
        this.ancho = ancho
        this.alto = alto
    }
    area() {
        return this.ancho * this.alto
    }
    perimetro() {
        return this.ancho * 2 + this.alto * 2
    }
}

let r1 = new Rectangulo(10, 15)
let r2 = new Rectangulo (20, 30)
console.log(r1.area())
console.log(r2.perimetro())


/*
    Para que no permita acceder a las propiedades desde fuera de la clase
    Hay dos notaciones private o # ( en este caso hay que ponerla cada vez que
        utilice la variable dentro de la case, con lo que es menos práctico)
*/

// un modificador interesante es readonly para un campo constante, que 
// no se pueda modificar.

class Rectangulo2 {
    private ancho: number
    #alto: number
    constructor(ancho: number, alto: number){
        this.ancho = ancho
        this.#alto = alto
    }

    area() {
        return this.ancho * this.#alto
    }
    perimetro() {
        return this.ancho * 2 + this.#alto * 2
    }
}

let r3 = new Rectangulo2(10, 15)

/*
 si utilizamos get/set delante de una función se comportará 
 en la invocación como un atributo, sin utilizar paréntesis

*/
class Rectangulo3 {
    private ancho: number
    #alto: number
    private _nombre: string  //se suele comenzar con subrayado para poder usar nombre()
    constructor(ancho: number, alto: number, _nombre: string){
        this.ancho = ancho
        this.#alto = alto
        this._nombre = _nombre
    }
    get nombre() {
        return this._nombre
    }
    set nombre(_nombre: string){
        this._nombre = _nombre
    }
    area() {
        return this.ancho * this.#alto
    }
    perimetro() {
        return this.ancho * 2 + this.#alto * 2
    }
}

let r4 = new Rectangulo3(10, 15, 'Rectángulo 1')
r4.nombre = `Nuevo: ${r4.nombre}`
console.log(r4.nombre)


