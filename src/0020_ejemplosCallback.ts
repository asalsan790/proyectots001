// Ejemplos de callback: función que se pasa como argumento a otra función
// Ideas de:
// https://altocodigo.blogspot.com/2019/07/funciones-callback-en-javascript.html

/// Ejemplo 1 
// ponemos a la función tipo any por simplificar la notación de tipos
 
function main01(callback01: any){  
    console.log('1º Buenos días');  
    callback01();  
}  
function cafe(){  
    console.log('2º ¿Quieres un cafe?');  
} 
main01(cafe); 

// Ejemplo 1 con otra notación sin la palabra function
// En este caso expresamos el tipo del parámetro callback01: 
//      función que no recibe nada y no devuelve nada

let main02 = (callback01: () => void) => {  
    console.log('3º Buenos días');  
    callback01();  
}  
let cafe2 = () => console.log('4º ¿Quieres un cafe?');  

main02(cafe2); 

// En esta variante del Ejemplo 1 utilizo una función anónima
// invoco a la función main03 pasándole una función,
// main03 hace priemro su trabajo que es escribir el pimer mensaje 
// y después invoca a la función que le he pasado.

function main03(callback: any){  
    console.log('5º Buenos días');  
    callback();  
} 
main03( function() {  
    console.log('6º ¿Quieres un cafe?');  
});  


// Con otra notación

let main04 = (callback: any) => {  
    console.log('7º Buenos días');  
    callback();  
} 
main04( () => {  
    console.log('8º ¿Quieres un cafe?');  
    }
);  

// Ejemplo 2 Pasando un parámetro a la función callback

function main05(callback: any){  
    let nombre = 'Andrés Pérez López';  
    callback(nombre);  
}  
function saluda(nombre: any){  
    console.log('Hola '+ nombre);  
}  
main05(saluda);  

// Ejemplo 2 con otra notación

let main06 = (callback: any) => {
    let miNombre = 'Santiago Segura';  
    callback(miNombre);  
}
let saluda01 = (nombre: string) => console.log('Qué tal '+ nombre);
main06(saluda01)


// Ahora la función callback la hacemos anónima

let main07 = (callback: any) => {
    let miNombre = 'Antonio López';  
    callback(miNombre);  
}

main07( (nombre: string) => 
        console.log('Qué tal estás'+ nombre) 
    )



// Ejemplo ??
// Función principal con parámetros y función anónima

function main08 (a: number, b: number, callback: any){  
    let total = a+b;  
    callback(total);  
}  
main08(2, 3, function(t: number) {  
    if( t >=5 ){  
        console.log("Prueba superada: " + t);  
    }else{  
        console.log("Inténtalo de nuevo: " + t);  
    }  
   }
);  

///////// Con otra notación
/*
   Esta es la función que tiene el callback. 
   Recibe dos parámetros y una función con una determinada estructura, 
        que a su vez recibe un parámetro.
   Hace su tarea con los parámetros recibidos 
   y al final invoca a la función recibida con para su ejecución enviándole un valor.
*/
let main09 = (a: number, b: number, callback: (r: number) => void ) => {  
    var total = a + b;  
    callback( total );  
} 

/*
    Cuando invocamos a la función anterior hay que saber que hará su 
    tarea con los valores 2 y 2 y luego se ejecutará la función 
    que le estoy mandando con un valor recibido en t.
*/
main09(2, 2, (t: number) => {  
        if(t >= 5){  
            console.log("Prueba superada: " + t);  
        }else{  
            console.log("Inténtalo de nuevo: " + t);  
        }  

    }
); 