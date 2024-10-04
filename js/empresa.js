
const form = document.querySelector('form');


form.addEventListener('submit', function (event) {

    event.preventDefault();

 
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const fecha = document.getElementById('fecha').value;
    const email = document.getElementById('email').value;

 
    alert('Gracias por su compra. Se la enviaremos lo antes posible.');
   

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

