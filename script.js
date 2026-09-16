const botonesVerMas = document.querySelectorAll(".boton-ver-mas");

function alternarInformacion(event) {
const boton = event.target;
const infoExtra = boton.previousElementSibling;
infoExtra.classList.toggle("oculto");

if (infoExtra.classList.contains("oculto")) {
boton.textContent = "Ver más";
} else {
boton.textContent = "Ver menos";
}
}

botonesVerMas.forEach(function(boton) {
boton.addEventListener("click", alternarInformacion);
});