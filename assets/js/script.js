function AñadirOrden()
{
    // Función mock
    event.preventDefault()
    alert("Preorden exitosa")
    window.location.href = "/index.html";
}

function VentanaPreorden()
{
    document.getElementById("flotante-contenedor").style.display = "flex"
}

function CerrarVentanaPreorden()
{
    document.getElementById("flotante-contenedor").style.display = "none"
}