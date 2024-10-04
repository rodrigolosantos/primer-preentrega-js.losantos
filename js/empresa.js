
const form = document.querySelector('form');


form.addEventListener('submit', function (event) {

    event.preventDefault();

 
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const fecha = document.getElementById('fecha').value;
    const email = document.getElementById('email').value;

 
    
   

    console.log('Información del usuario:');
    console.log('Nombre/Razón Social:', nombre);
    console.log('Dirección:', direccion);
    console.log('Fecha Aproximada de Entrega:', fecha);
    console.log('Email:', email);
});

// clicks en la página.
document.addEventListener('click', function () {
    console.log('Se hizo clic en la página.');
});

// scroll en la página.
document.addEventListener('scroll', function () {
    console.log('Se realizó scroll en la página.');
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto
        
        // Mostrar el primer alert de agradecimiento
        alert("Gracias por su compra, se la enviaremos lo antes posible.");
        
        // Preguntar si quiere seguir comprando
        const seguirComprando = confirm("¿Quiere seguir comprando?");

        if (seguirComprando) {
            // Si desea seguir comprando, puede redirigir al usuario a la página de ventas
            window.location.href = "venta.html";
        } else {
            // Si no desea seguir comprando, puede redirigirlo a una página diferente, por ejemplo, al inicio
            window.location.href = "maridaje.html";
        }
    });
});