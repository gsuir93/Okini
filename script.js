function calcularPrecio() {
    const total = precioUnitario * cantidad;
    return total;
}

//function puedeReservar(cantidad) {
  //  return cantidad <= 2;
//}

function puedeReservar(cantidad) {
    return cantidad > 0;
}

//const reservarBtn = document.querySelector('#reservarBtn');

//reservarBtn.addEventListener('click', function() {
  //  console.log("El ususario hizo click");
//} );

const reservarBtn = document.querySelector('#reservarBtn');
const contadorTazas = document.querySelector('#tazasDisponibles');

reservarBtn.addEventListener('click', function() {
    const tazasActuales = Number(contadorTazas.textContent); 

    if (puedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
        console.log("El usuario hizo click en reservar. Tazas restantes: " + (tazasActuales - 1), "Reserva exitosa");
        alert("¡Reserva exitosa! Tazas restantes: " + (tazasActuales - 1));
    } else {
        reservarBtn.textContent= "Sin cupos";
        reservarBtn.disabled = true;
        alert("No hay tazas disponibles para reservar.");
    }
});