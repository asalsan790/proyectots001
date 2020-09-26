// ejemplos tomados de youtube makigas: tutoriales de programación:
// https://www.youtube.com/makigas

// Herencia con constructores

// atributo protected para que se pueda usar en las subclases
// si declaramos la clase abstract no la podremos instanciar
abstract class Vehiculo2{
    protected _fabricante: string

    constructor(_fabricante: string){
        this._fabricante = _fabricante
    }

    moverse(){
        console.log(`nos movemos con ${this._fabricante}`)
    }
}
class Terrestre2 extends Vehiculo2{

}
class Maritimo2 extends Vehiculo2{
    moverse(){
        super.moverse()
        console.log('soy marítimo')
    }

}
class Aereo2 extends Vehiculo2{
    private _tipo: string
    constructor(_fabricante: string, _tipo: string){
        super(_fabricante)
        this._tipo = _tipo
    }
    moverse(){
        console.log(`nos movemos con ${this._fabricante} y el tipo: ${this._tipo}`)
    }
}
// Da error si es abstract   let va = new Vehiculo2('Pegaso')
// va.moverse()
// Atención las variables pueden ser del tipo de la supercalse
// o de la subclase
/*
Una variable del tipo de la superclase puede referenciar tanto 
a un objeto de la superclase como a uno de cualquiera de las subclases
Pero si referencia a una subclase no puede usar las propiedades declaradas
en la superclase
*/
let vb: Vehiculo2 = new Terrestre2('Land Rover')
vb.moverse()
let vc: Maritimo2 = new Maritimo2('Owecraf')
vc.moverse()
let vd = new Aereo2('helicoptero', 'Airbus')
vd.moverse()

