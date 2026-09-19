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

const slides = document.querySelectorAll ('.slide');
const dots = document.querySelectorAll ('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document .getElementById('nextBtn');
const carouselContainer = document .getElementById('carousel');

let currentSlide = 0;
let autoSlideInterval;


//Funcion para mostrar un slide especifico

function showSlide(index){}
    if (slides.lenght === 0) return;
    if (index >= slides.lenght){
        currentSlide = 0;
    } else if (index < 0 ) {
        currentSlide = slides.lenght - 1;
        } else {
            currentSlide = index;
            }

//Avanzar al siguiente slide

function nextSlide () {
    showSlide (currentSlide + 1);
}

//Retroceder a la anterior imagen

function prevSlide(){
    showSlide(currentSlide - 1);
}

//Event Listeners para botones de navegacion
if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevBtn);