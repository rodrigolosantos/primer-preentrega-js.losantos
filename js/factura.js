// Escuchar el evento de envío del formulario
document.getElementById('purchase-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    // Capturamos la información del formulario
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const fecha = document.getElementById('fecha').value;
    const email = document.getElementById('email').value;

    // Verificamos que los campos no estén vacíos
    if (!nombre || !direccion || !fecha || !email) {
        alert('Por favor, completa todos los campos antes de finalizar la compra.');
        return;
    }

    // Mostrar alerta nativa para seguir comprando o finalizar
    const seguirComprando = confirm("Gracias por tu compra. \n ¿Quieres seguir comprando?");

    if (seguirComprando) {
        // Si el usuario quiere seguir comprando
        console.log('El usuario eligió: Seguir comprando.');
        console.log(`Datos del usuario:
        - Nombre: ${nombre}
        - Dirección: ${direccion}
        - Fecha de entrega: ${fecha}
        - Email: ${email}`);
        
        window.location.href = './venta.html'; // Redirigir a continuar comprando
    } else {
        // Si el usuario no quiere seguir comprando
        console.log('El usuario eligió: Finalizar compra.');
        console.log(`Datos del usuario:
        - Nombre: ${nombre}
        - Dirección: ${direccion}
        - Fecha de entrega: ${fecha}
        - Email: ${email}`);

        window.location.href = './maridaje.html'; // Redirigir a la página de agradecimiento
    }
});
