console.log("Hola GEN");

//FLUJO DE CONTROL
/*

Cuando hablamos de flujo de control, hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa (arriba/abbajo, izqder). Estas instrucciones pueden ser una funcion, un console log, un ciclo, etc.

La importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones de pendiendo de una condicional (un elemento o instruccion detonante).


Condicionales

Las condicionales son palabras reservadas que nos permiten evaluar si una condicion se cumple o no bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partiran de un true o false.

tengo la camisa limpia?
    Si: voy a la fiesta
    No: Me quedo en casa

tengo esta variable?
    Si: ejecuta linea 57 de codigo
    NO: Ejecuto la linea 80 de mi codigo



Condicional IF (SI)

if nos sirve para validar si una condicion se cumple o no. Si se cumple entonces ejecutamos un bloque de codigo que esta dentro del if. Si no se cumple, entonces no hacemos nada.
Nota: Es la condicion mas sencilla, pero la mas limitante porque solo nos da una opcion.

if(condicion){
    //bloque de codigo que se ejecuta si la condicion es verdadera (se cumple)
}
*/

//Ejemplo Felipe va a ir a una fiesta y necesita tomar su camisa favorita limpia para poder ir.

// if(camisaLimpia = true){ //Siempre tiene que ser true para ejecutar el codigo
//     console.log("Felipe va a la fiesta con if");
// }

/*
else (de otro modo, de lo contrario, si no)

if(condicion detonante){
    //Bloque de codigo que se ejecuta si la condicion es verdadera
}else{
    //bloque de codigo que se ejecuta si la condicion es falssa
}

*/

// if(camisaLimpia = false){
//     console.log("Felipe va a la fiesta con IF Else"); //true
// }else{
//     console.log("Felipe se queda en su casa para hacer la lloracion"); //false
// }

/*
else if

esta condicion nos ayuda a jugar con mas acciones y mas detonantes, para tener muchas posibilidades en el mismo codigo, para lograr esto, vamos a unir el else con el if

if(condicion detonante){
    //bloque de codigo si la condicion es verdadero
} else if (condicion detonante 2){
    //bloque de codigo si la condicion 1 es falsa y la condicion 2 es verdadera
} else{
    //bloque de codigo si las dos condiciones son falsas
}

*/

//Ejemplo 2: Felipe tiene hambre, y quiere comer chilaquiles verdes

// if (hambre = true){
//     console.log("Felipe va a comer");
// } else if (chilaquiles = true){
//     console.log("Felipe come chilaquiles");
// } else {
//     console.log("Felipe no come y se pone triste");
// }

//Ejemplo 3: Escribe un programa que me muestre 3 mensajes diferentes: El primer mensaje se muestra si son las 13:00hrs y debera imprimir "vamos a descanso".. El segundo mensaje se muestra si son las 14:00 hrs y deberá imprimir "vamos a comer". El tercer mensaje se muestra si no se cumple nada de lo anterior y debera imprimir "Lo siento mi ciela, seguimos programando"

//Prompt es una forma de ingresar datos y poder hacer uso de ellos

// let hora = prompt("Hola dime un numero");

//let hora = 13; antes del prompt

// if (hora == 13){
//     console.log("Vamos a descanso");
// } else if (hora == 14){
//     console.log("Vamos a comer");
// } else {
//     console.log("Lo siento mi ciela, seguimos programando");
// }


/*
Switch (cambiar o intercambiar / segun sea el caso)

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de la opcion deseada (estado de la variable)

Evalua una expresion comparando el valor de una variable con la expresion o caso, y ejecuta las declaraciones asociadas con ese caso, asi como los casos que sigan.

Elementos principales del switch: un valor a evaluar, un documento sera para cada caso, una salida para cada caso y una salida en general.

expresion con un valor

switch (expresion){
    case 1:
        //Bloque de codigo que se ejecuta si la opcion seleccionada es igual a 1
        break;
    case 2:
        //Bloque de codigo que se ejecuta si la opcion seleccionada es igual a 2
        break;
    case 3:
        //Bloque de codigo que se ejecuta si la opcion seleccionada es igual a 3
        break;
    
    default:
        //bloque de codigo que se ejecuta si ninguna opcion coincide
}
*/

//Elevador con else if

// let piso = prompt("¿A que piso vas? elseif");

// if (piso == 1){
//     console.log("Llegamos al piso 1");
// } else if (piso == 2){
//     console.log("Llegamos al piso 2");
// } else if (piso == 3){
//     console.log("Llegamos al piso 3");
// } else if (piso == 4){
//     console.log("Llegamos al piso 4");
// } else if (piso == 5){
//     console.log("Llegamos al piso 5"); //piso de destino
// } else {
//     console.log("Piso no encontrado");
// }

// //expresion con un valor
// let pisoSwitch = parseInt(prompt("¿A que piso vas? Switch"));
// console.log(typeof(pisoSwitch));

// switch (pisoSwitch){ //si recibo un numero
//     case 1: //caso evalua un string
//         console.log("Llegamos al piso 1");
//         break;
//     case 2:
//         console.log("Llegamos al piso 2");
//         break;
//     case 3:
//         console.log("Llegamos al piso 3");
//         break;
    
//     default:
//         console.log("Opcion no valida");
// }


// //Funciones aplicables a un consultorio dental

//Funcion calcular costo de una consulta (condicionales)

//Variables para mis datos
let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;
let costo;

function calcularCostoDeConsulta (tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente){

    tipoServicio = "Extraccion";
    tiempoConsulta = 120;
    emergencia = true;
    promocion = .10;
    clienteFrecuente = true;
    costo = 5000;
    promocionClienteFrecuente = .10;

    // //Calcular el costo total (antes de validar si es cliente frecuente)
    // let costoTotal = costo - promocion;

    // //condiciones para saber si agrego otra promocion por ser cliente frecuente

    // if (clienteFrecuente == true){
    //     costoTotal * promocionClienteFrecuente
    // }
    





}

     //ejemplo mas sencillo
     function calcularCostoDeConsultaDos(duracionMinutos, costoPorMinuto, clienteFrecuente){
        let costoTotal = duracionMinutos * costoPorMinuto;
    
        if(clienteFrecuente){
            costoTotalComDescuento = costoTotal * .10;
        } else{
            console.log(costoTotal);
        }
    
        return costoTotalComDescuento;
    }

console.log(calcularCostoDeConsultaDos(45,15,true));








function registrarPaciente(){
    nombre;

    if (clienteRegistrado = true){
        console.log("Ya no es necesario registrar");
    }
}

function guardarPaciente(){

}

if (pacienteRegistrado = true){
    console.log("Paciente con registro");
} else{
    function guardarPaciente(){};
}





