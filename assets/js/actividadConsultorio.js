///////////////////////

function mayorEdad(edad) {
    if (edad >= 60) {
        console.log("Bienvenido, descuento por persona de la 3era edad!");
    } else if (edad <= 18) {
        console.log("Es necesario ser mayor de edad para consultar, por favor venir acompañado de un tutor. ");
    }  else {
        console.log("Bienvenido!")
    }
}
//////////////////////

function tratamiento (alergia){
    if (alergia == 1){
        console.log("Contestar el formulario de alergias");
    } else {
        console.log("Omitir formulario de alergias");
    }
}

let edad = 25;



function condicion(){
    let opcionServicio = parseInt(prompt("¿Que tipo de tratamiento prefieres? \n 1. Evaluación y planificación de diseño de sonrisa (Gratis) \n 2. Limpieza dental \n 3. Extracción simple"));

    switch (opcionServicio){
        case 1:
            console.log("Seleccionaste EVALUACIÓN \n El costo es GRATUITO")
            let edad1 = parseInt(prompt("¿Cuantos anios tienes?"));
            mayorEdad(edad1);
            let alergia1 = parseInt(prompt("¿Cuentas con alguna alergia? \n 1. Si \n 2. No"));
            tratamiento(alergia1);
            break;

        case 2:
            console.log("Seleccionaste LIMPIEZA \n El costo es $800")
            let edad2 = parseInt(prompt("¿Cuantos anios tienes?"));
            mayorEdad(edad2);
            let alergia2 = parseInt(prompt("¿Cuentas con alguna alergia? \n 1. Si \n 2. No"));
            tratamiento(alergia2);
            break;

        case 3:
            console.log("Seleccionaste Extracción \n El costo es $300")
            let edad3 = parseInt(prompt("¿Cuantos anios tienes?"));
            mayorEdad(edad3);
            let alergia3 = parseInt(prompt("¿Cuentas con alguna alergia? \n 1. Si \n 2. No"));
            tratamiento(alergia3);
            break;

        default:
            console.log("ERROR: No seleccionaste ninguna opcion");
    }

}

condicion();