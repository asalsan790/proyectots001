 // Original de: https://altocodigo.blogspot.com/2019/07/
 
 
 //Ejemplo 1 declaramos un array de números  
 let numeros: number[] = [2,5,60] 
 console.log("Números iniciales: ", numeros)
 //doblemos sus valores  
 //MÉTODO 1 con map y una función externa  

 /*
 Para ver la función map ir a 
 https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
 
 Como dice la documentación map crea un nuevo array aplicando, la función pasada, 
 a cada uno de los elementos del array original
 */
 function doblaNumero(num: number): number{  
    return num * 2 
 }
 // Observar que declaramos arriba la función y se la pasamos a map
 let doblados: number[] = numeros.map(doblaNumero); 
 console.log('Método 1') 
 console.log(doblados) 
 
//MÉTODO 1B declarando la función como una variable para lo que 
// hay que usar la notación =>
let doblaNumero01 = (num: number): number => {  
    return num * 2 
}
let dobles01: number[] = numeros.map( doblaNumero01 ); 
console.log('Método 1B')  
console.log(dobles01)
 
//MÉTODO 2 con una función anónima a la que no hemos dado nombre de ninguna manera 
let dobles = numeros.map( function(num): number {  
    return num * 2  
   })
console.log('Método 2')
console.log(dobles)  

//MÉTODO 3 con una función anónima, todo en una líena 
console.log('Método 3') 
console.log( numeros.map( function(num) { return num * 2} ));

 //MÉTODO 4 con una función de flecha
 // si solo recibe un parámetro no son necesarios los paréntesis (num)
 console.log('Método 4')   
 console.log( numeros.map( num => num * 2) ); 

 