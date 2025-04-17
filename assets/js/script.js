function AñadirOrden()
{
    // Función mock
    event.preventDefault()
    alert("Preorden exitosa")
    window.location.href = "."; // Evita que el formulario redirija a la página con un query string
}

function VentanaPreorden()
{
    document.getElementById("flotante-contenedor").style.display = "flex" // Mostrar ventana de formulario
}

function CerrarVentanaPreorden()
{
    document.getElementById("flotante-contenedor").style.display = "none" // Ocultar ventana de formulario
}