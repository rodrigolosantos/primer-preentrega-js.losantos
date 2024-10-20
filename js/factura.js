document.addEventListener('DOMContentLoaded', function() {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (nombreUsuario) {
        document.getElementById('nombre').value = nombreUsuario;
    }

    mostrarCompra(carrito);
});

function mostrarCompra(carrito) {
    const productosComprados = document.querySelector('.productos-comprados');
    let total = 0;

    if (carrito.length === 0) {
        productosComprados.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        let listaProductos = '<h4>Productos en tu compra:</h4><ul>';
        carrito.forEach(producto => {
            listaProductos += `<li>${producto.nombre} - Precio: $${producto.precio} (Cantidad: ${producto.cantidad})</li>`;
            total += producto.precio * producto.cantidad;
        });
        listaProductos += '</ul>';
        productosComprados.innerHTML = listaProductos;
    }

    document.querySelector('.total-precio').textContent = total.toFixed(2);
}

document.getElementById('purchase-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const fecha = document.getElementById('fecha').value;
    const email = document.getElementById('email').value;

    if (!nombre || !direccion || !fecha || !email) {
        alert('Por favor, completa todos los campos antes de finalizar la compra.');
        return;
    }

    const total = document.querySelector('.total-precio').textContent;
    let detallesCompra = `Factura N°00001\nNombre: ${nombre}\nDirección: ${direccion}\nFecha de entrega: ${fecha}\nEmail: ${email}\nTotal: $${total}\n\n¿Quieres seguir comprando?\n Si es así, oprime ACEPTAR, de lo contrario, CANCELAR para finalizar la compra.`;
    const seguirComprando = confirm(`Gracias por tu compra!!!.\nLa recibirás en la fecha indicada.\n${detallesCompra}`);

    if (seguirComprando) {
        window.location.href = './venta.html';
    } else {
        Swal.fire({
            title: '¡Compra finalizada!',
            html: '<b>Te enviamos la factura al correo indicado. ¡Gracias nuevamente!</b><br><i>Que disfrutes tu vino</i>',
            icon: 'success',
            timer: 6000,
            timerProgressBar: true,
            background: '#fff7f0',
            color: '#8B0000',
            showConfirmButton: false,
            customClass: {
                popup: 'swal-popup-custom',
                title: 'swal-title-custom'
            }
        }).then(() => {
            window.location.href = './maridaje.html';
        });
    }
});
