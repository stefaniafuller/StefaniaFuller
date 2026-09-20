/* BOTONES VER MÁS */
const botonesVerMas = document.querySelectorAll(".boton-ver-mas");

botonesVerMas.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const infoExtra = boton.previousElementSibling;

        if (infoExtra.classList.contains("oculto")) {
            infoExtra.classList.remove("oculto");
            boton.textContent = "Ver menos";
        } else {
            infoExtra.classList.add("oculto");
            boton.textContent = "Ver más";
        }
    });
});

/* CARRUSEL */
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselContainer = document.getElementById('carousel');

let currentSlide = 0;
let autoSlideInterval;

// Función para mostrar un slide específico
function showSlide(index) {
    if (slides.length === 0) return;

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Ocultar todos los slides y quitar estado activo a los dots
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    // Mostrar el slide actual y activar el dot correspondiente si existe
    slides[currentSlide].style.display = 'block';
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

// Avanzar al siguiente slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Retroceder al slide anterior
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Event Listeners para botones de navegación
if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);

// Inicializar carrusel
showSlide(currentSlide);