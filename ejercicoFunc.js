// Ejercicio 1: Función para reservar tazas de café con la regla que no se pueden reservar 
// más de 2 tazas por persona y no se puede superar el máximo diario de 50 tazas.

let contador = 0;
const maxTazasCafeDia = 50

function puedeReservar(cantidad, maxTazasCafeDia){
    if(cantidad <= 2 && cantidad >=1 && (contador + cantidad) <= maxTazasCafeDia){

    contador = contador + cantidad

    console.log(contador);

    return true;
  } else {
    return false;
  }
}
console.log(puedeReservar(2, 50));