const botonCorregir = document.getElementById("botonCorregir");
const resultado = document.getElementById("resultado");

botonCorregir.addEventListener("click", function(){
    
    let puntos = 0;


    const respuesta1 = document.querySelector('input[name="pregunta1"]:checked');
    const respuesta2 = document.querySelector('input[name="pregunta2"]:checked');
    const respuesta3 = document.querySelector('input[name="pregunta3"]:checked');

    if (respuesta1 && respuesta1.value === "b") {
        puntos++;
    }
    
    if (respuesta2 && respuesta2.value === "b") {
        puntos++;
    }
    
    if (respuesta3 && respuesta3.value === "c") {
        puntos++;
    }

    resultado.textContent = "Obtuviste" + puntos + "de 3 puntos";
});

