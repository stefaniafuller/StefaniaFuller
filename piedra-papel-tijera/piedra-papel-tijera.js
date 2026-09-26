const botonPiedra = document.getElementById("piedra");
const botonPapel = document.getElementById("papel");
const botonTijera = document.getElementById("tijera");
const eleccionUsuario = document.getElementById("eleccionUsuario");
const eleccionComputadora = document.getElementById("eleccionComputadora");
const resultado = document.getElementById("resultado");

const opciones = ["piedra", "papel", "tijera"];

function jugar(eleccionJugador) {
    const numero = Math.floor(Math.random() * 3);
    const eleccionPC = opciones[numero];

    eleccionUsuario.textContent = "Vos elegiste: " + eleccionJugador;
    eleccionComputadora.textContent = "La computadora eligió: " + eleccionPC;

    if (eleccionJugador === eleccionPC) {
        resultado.textContent = "¡Empate!";
    } else if (
        (eleccionJugador === "piedra" && eleccionPC === "tijera") ||
        (eleccionJugador === "papel" && eleccionPC === "piedra") ||
        (eleccionJugador === "tijera" && eleccionPC === "papel")
    ) {
        resultado.textContent = "¡Ganaste!";
    } else {
        resultado.textContent = "Ganó la computadora";
    }
}

botonPiedra.addEventListener("click", function() {
    jugar("piedra");
});

botonPapel.addEventListener("click", function() {
    jugar("papel");
});

botonTijera.addEventListener("click", function() {
    jugar("tijera");
});