//BOTONES VER MÁS 
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

// CARRUSEL 
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
const boton = document.getElementById("volverArriba");
window.addEventListener("scroll", function () {
  if (window.scrollY > 8000) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
});
boton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// AUMENT O DISMIN LETRA

const texto = document.getElementById("texto");
const disminuir = document.getElementById("disminuir");
const normal = document.getElementById("normal");
const aumentar = document.getElementById("aumentar");
let tamaño = 16;
aumentar.addEventListener("click", function () {
if (tamaño < 30) {
tamaño = tamaño + 2;
texto.style.fontSize = tamaño + "px";
}
});
disminuir.addEventListener("click", function () {
if (tamaño > 10) {
tamaño = tamaño - 2;
texto.style.fontSize = tamaño + "px";
}
});
normal.addEventListener("click", function () {
tamaño = 16;
texto.style.fontSize = tamaño + "px";
});

// FORMULARIO 
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  const resultado = document.getElementById("resultado");
  if (nombre.length < 3) {
    event.preventDefault();
    resultado.textContent = "El nombre debe tener al menos 3 caracteres.";
  } else if (mensaje.trim() === "") {
    event.preventDefault();
    resultado.textContent = "El mensaje no puede estar vacío.";
  } else {
    event.preventDefault();
    resultado.textContent = "Formulario enviado correctamente!";
  }
});

// CAMBIAR 3 TEXTOS
const botonAnuncio = document.getElementById("botonCambiar");
const textoAnuncio = document.getElementById("textoInformativo");
let contador = 0;
if (botonAnuncio && textoAnuncio) {
  botonAnuncio.addEventListener("click", function () {
    contador++;
    if (contador === 1) {
      textoAnuncio.textContent = "💳 HASTA 3 CUOTAS SIN INTERÉS CON TARJETAS BANCARIZADAS 💳";
    } else if (contador === 2) {
      textoAnuncio.textContent = "🚚 CONTAMOS CON ENVÍOS DENTRO DE CÓRDOBA 🚚";
    } else if (contador === 3) {
      textoAnuncio.textContent = "💵 ACEPTAMOS TODOS LOS MEDIOS DE PAGO 💵";
      contador = 0; 
    }
  });
}

// MODO OSCURO O CLARO
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener("click", function(){ 
document.body.classList.toggle("darkMode");
});

toggleBtn.addEventListener("click", function() {

document.body.classList.toggle("dark");
if (document.body.classList.contains("dark")) {

botonTema.textContent = "Cambiar a Modo Claro"; }
else { botonTema.textContent = " Cambiar a Modo Oscuro"; }

});