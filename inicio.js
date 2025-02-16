// Función para mostrar el mensaje según la respuesta
function mostrarMensaje(respuesta) {
    // Ocultar botones
    document.getElementById("loveButton").style.display = "none";
    document.getElementById("respuesta2").style.display = "none";

    // Ocultar ambos mensajes antes de mostrar el correcto
    document.getElementById("mensaje1").style.display = "none";
    document.getElementById("mensaje2").style.display = "none";

    // Mostrar el mensaje correspondiente
    if (respuesta === "si") {
        document.getElementById("mensaje2").style.display = "block"; // Mensaje de "Sí"
        document.getElementById("siguiente").style.display = "block"; // Botón de "Toca aquí para ver el regalo"
    } else {
        document.getElementById("mensaje1").style.display = "block"; // Mensaje de "No"
        document.getElementById("reintentar").style.display = "block"; // Botón de "Di que si"
    }
}

// Asignar eventos a los botones
document.getElementById("loveButton").addEventListener("click", function() {
    mostrarMensaje("si");
});

document.getElementById("siguiente").addEventListener("click", function() {
    window.location.href = "globos.html";
});

document.getElementById("respuesta2").addEventListener("click", function() {
    mostrarMensaje("no");
});

document.getElementById("reintentar").addEventListener("click", function() {
    window.location.href = "index.html";
});
