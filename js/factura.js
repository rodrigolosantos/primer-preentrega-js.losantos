// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Cargar el nombre de usuario del localStorage
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verifica si el usuario ya ingresó su nombre
    if (nombreUsuario) {
        document.getElementById('nombre').value = nombreUsuario; // Prellenar el campo nombre
    }

    // Mostrar los detalles de la compra en el formulario
    mostrarCompra(carrito);
});

// Función para mostrar la compra completa en el formulario
function mostrarCompra(carrito) {
    // Crea un elemento para mostrar los productos comprados
    const productosComprados = document.querySelector('.productos-comprados');
    
    // Verifica si hay productos en el carrito
    if (carrito.length === 0) {
        productosComprados.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        let listaProductos = '<h4>Productos en tu compra:</h4><ul>';
        carrito.forEach(producto => {
            listaProductos += `<li>${producto.nombre} - Precio: $${producto.precio} (Cantidad: ${producto.cantidad})</li>`;
        });
        listaProductos += '</ul>';
        productosComprados.innerHTML = listaProductos;
    }
}

// Agregar el evento de envío del formulario
document.getElementById('purchase-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    
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

    // seguir comprando o finalizar?
    const seguirComprando = confirm("Gracias por tu compra.\n La recibiras pronto en tu casa.\n ¿Quieres seguir comprando?");

    if (seguirComprando) {
        // Si el usuario quiere seguir comprando...
        console.log('El usuario eligió: Seguir comprando.');
        console.log(`Datos del usuario:
        - Nombre: ${nombre}
        - Dirección: ${direccion}
        - Fecha de entrega: ${fecha}
        - Email: ${email}`);
        
        window.location.href = './venta.html'; // Redirige a continuar comprando
    } else {
        // Si el usuario no quiere seguir comprando
        console.log('El usuario eligió: Finalizar compra.');
        console.log(`Datos del usuario:
        - Nombre: ${nombre}
        - Dirección: ${direccion}
        - Fecha de entrega: ${fecha}
        - Email: ${email}`);

        window.location.href = './maridaje.html'; // Redirigir a la página de maridaje
    }
});
