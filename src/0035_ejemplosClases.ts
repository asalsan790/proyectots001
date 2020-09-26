// ejemolos tomados de youtube makigas: tutoriales de programación:
// https://www.youtube.com/makigas

// Herencia de métodos 
class Vehiculo{

    moverse(){
        console.log('nos movemos')
    }
}
class Terrestre extends Vehiculo{

}
class Maritimo extends Vehiculo{
    moverse(){
        super.moverse()
        console.log('soy marítimo')
    }

}
class Aereo extends Vehiculo{

}
let v1 = new Vehiculo()
v1.moverse()
let v2 = new Terrestre()
v2.moverse()
let v3 = new Maritimo()
v3.moverse()
