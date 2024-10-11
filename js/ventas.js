
document.addEventListener('DOMContentLoaded', function() {
    const nombreUsuario = localStorage.getItem('nombreUsuario');

    if (!nombreUsuario) {
        const nombreForm = document.createElement('div');
        nombreForm.innerHTML = `
            <div class="modal fade" id="nombreModal" tabindex="-1" aria-labelledby="nombreModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="nombreModalLabel">Ingrese su nombre</h5>
                  </div>
                  <div class="modal-body">
                    <input type="text" id="nombreInput" class="form-control" placeholder="Escriba su nombre">
                  </div>
                  <div class="modal-footer">
                    <button type="button" id="guardarNombre" class="btn btn-primary">Guardar</button>
                  </div>
                </div>
              </div>
            </div>
        `;
        document.body.appendChild(nombreForm);

        const nombreModal = new bootstrap.Modal(document.getElementById('nombreModal'));
        nombreModal.show();

        document.getElementById('guardarNombre').addEventListener('click', () => {
            const nombreIngresado = document.getElementById('nombreInput').value;
            if (nombreIngresado) {
                localStorage.setItem('nombreUsuario', nombreIngresado);
                nombreModal.hide();

                // Uso SweetAlert para el mensaje de bienvenida
                Swal.fire({
                    title: `¡Hola ${nombreIngresado}!`,
                    text: "Bienvenido a nuestra Bodega.",
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
            }
        });
    } else {
        // Uso SweetAlert para la bienvenida cuando el usuario ya está registrado
        Swal.fire({
            title: `¡Hola ${nombreUsuario}!`,
            text: "Bienvenido de nuevo a nuestra Bodega.",
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
    }

    // Mostrar la fecha y hora actual usando Luxon
    const DateTime = luxon.DateTime;
    const now = DateTime.now();
    console.log("Fecha y hora actual:", now.toLocaleString(DateTime.DATETIME_MED));
});

// Array de productos
const stockProductos = [
    { id: 1, nombre: "Cabernet Franc", precio: 5000, img: "../imagenes/cabernet franc.jpg" },
    { id: 2, nombre: "Cabernet sauvignon", precio: 4000, img: "../imagenes/cabernet sauvignon.jpg" },
    { id: 3, nombre: "Chardonnay", precio: 3800, img: "../imagenes/chardonnay.jpg" },
    { id: 4, nombre: "Bonarda", precio: 6700, img: "../imagenes/bonarda.jpg" },
    { id: 5, nombre: "Malbec", precio: 5100, img: "../imagenes/malbec.jpg" },
    { id: 6, nombre: "Pinot Noir", precio: 6000, img: "../imagenes/pinot noir.jpg" },
    { id: 7, nombre: "Syrah", precio: 7200, img: "../imagenes/syrah.jpg" },
    { id: 8, nombre: "Tannat", precio: 6000, img: "../imagenes/tannat.jpg" },
    { id: 9, nombre: "Torrontes", precio: 3000, img: "../imagenes/torrontes.jpg" },
];

let carrito = [];
let total = 0;

// Elementos del DOM
const contenedorProductos = document.getElementById("contenedor-productos");
const productosCarrito = document.getElementById("productos-carrito");
const totalElement = document.getElementById("total");

// Muestro productos en la tienda
stockProductos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto", "col-md-4", "mb-4");

    div.innerHTML = `
        <div class="card h-100">
            <img src="${producto.img}" alt="${producto.nombre}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Comprar</button>
            </div>
        </div>
    `;

    contenedorProductos.appendChild(div);
});

// Agrego producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = stockProductos.find(p => p.id === idProducto);
    const productoEnCarrito = carrito.find(p => p.id === idProducto);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    total += producto.precio;
    actualizarCarrito();

    // Uso SweetAlert para confirmar que el producto fue añadido
    Swal.fire({
        title: 'Producto añadido',
        text: `${producto.nombre} ha sido añadido al carrito`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
    });
}

// Actualizo carrito con botones de +, -, y eliminar
function actualizarCarrito() {
    productosCarrito.innerHTML = '';
    carrito.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("producto-carrito");

        div.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <span>${producto.nombre} - Precio: $${producto.precio}</span>
                <div>
                    <button class="btn btn-secondary btn-sm" onclick="disminuirCantidad(${producto.id})">-</button>
                    <span class="mx-2">${producto.cantidad}</span>
                    <button class="btn btn-secondary btn-sm" onclick="aumentarCantidad(${producto.id})">+</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
                </div>
            </div>
        `;

        productosCarrito.appendChild(div);
    });
    totalElement.textContent = `Total: $${total}`;
}

// Funciones para aumentar, disminuir y eliminar
function aumentarCantidad(idProducto) {
    const producto = carrito.find(p => p.id === idProducto);
    producto.cantidad += 1;
    total += producto.precio;
    actualizarCarrito();
}

function disminuirCantidad(idProducto) {
    const producto = carrito.find(p => p.id === idProducto);
    if (producto.cantidad > 1) {
        producto.cantidad -= 1;
        total -= producto.precio;
        actualizarCarrito();
    }
}

function eliminarDelCarrito(idProducto) {
    const producto = carrito.find(p => p.id === idProducto);
    total -= producto.precio * producto.cantidad;
    carrito = carrito.filter(p => p.id !== idProducto);
    actualizarCarrito();
}

// Ir a checkout
function irACheckout() {
    setTimeout(() => {
        window.location.href = "./factura.html";
    }, 2000); // Retrasamos la navegación 2 segundos
}
// Ir a checkout con validación de carrito vacío
function irACheckout() {
    if (carrito.length === 0) {
        // Uso SweetAlert para mostrar una alerta si el carrito está vacío
        Swal.fire({
            title: 'Carrito vacío',
            text: 'No ha seleccionado ningún producto. Por favor, añada productos antes de finalizar la compra.',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        });
    } else {
        // Si el carrito tiene productos, redirige al checkout
        Swal.fire({
            title: 'Procesando compra',
            text: 'Necesitamos tus datos para facturar la compra',
            icon: 'success',
            timer: 5000,
            showConfirmButton: false
        });

        setTimeout(() => {
            window.location.href = "./factura.html";
        }, 5000); // Retraso la navegación 2 segundos
    }
}
