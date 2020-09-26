// Cambiar lo necesario para explicar el polimorfismo

// Herencia con constructores

// atributo protected para que se pueda usar en las subclases
// si declaramos la clase abstract no la podremos instanciar
abstract class Vehiculo3{
    protected _fabricante: string

    constructor(_fabricante: string){
        this._fabricante = _fabricante
    }

    moverse(){
        console.log(`nos movemos con ${this._fabricante}`)
    }
}
class Terrestre3 extends Vehiculo3{

}
class Maritimo3 extends Vehiculo3{
    moverse(){
        super.moverse()
        console.log('soy marítimo')
    }

}
class Aereo3 extends Vehiculo3{
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
let v30: Vehiculo3 = new Terrestre3('Land Rover')
vb.moverse()
let v31: Maritimo3 = new Maritimo3('Owecraf')
vc.moverse()
let v32 = new Aereo3('helicoptero', 'Airbus')
vd.moverse()

