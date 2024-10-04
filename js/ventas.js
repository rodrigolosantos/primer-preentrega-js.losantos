let nombreUsuario = prompt("Por favor, para continuar le solicitamos que ingrese su nombre:");
alert("¡Hola " + nombreUsuario + "! Bienvenido a nuestra Bodega.");

const stockProductos = [
    { id: 1, nombre: "Cabernet Franc", precio: 1000, img: "../imagenes/cabernet franc.jpg" },
    { id: 2, nombre: "Cabernet sauvignon", precio: 2000, img: "../imagenes/cabernet sauvignon.jpg" },
    { id: 3, nombre: "Chardonnay", precio: 3000, img: "../imagenes/chardonnay.jpg" },
    { id: 4, nombre: "Bonarda", precio: 4000, img: "../imagenes/bonarda.jpg" },
    { id: 5, nombre: "Malbec", precio: 5000, img: "../imagenes/malbec.jpg" },
    { id: 6, nombre: "Pinot Noir", precio: 6000, img: "../imagenes/pinot noir.jpg" },
    { id: 7, nombre: "Syrah", precio: 6000, img: "../imagenes/syrah.jpg" },
    { id: 8, nombre: "Tannat", precio: 6000, img: "../imagenes/tannat.jpg" },
    { id: 9, nombre: "Torrontes", precio: 6000, img: "../imagenes/torrontes.jpg" },
];

let carrito = [];
let total = 0;

const contenedorProductos = document.getElementById("contenedor-productos");
const productosCarrito = document.getElementById("productos-carrito");
const totalElement = document.getElementById("total");

stockProductos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}">
        <hr>
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Comprar</button>
    `;

    contenedorProductos.appendChild(div);
});

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
}

function actualizarCarrito() {
    productosCarrito.innerHTML = '';
    carrito.forEach((producto) => {
        const div = document.createElement("div");
        div.innerHTML = `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio * producto.cantidad}`;
        productosCarrito.appendChild(div);
    });
    totalElement.textContent = `Total: $${total}`;
}

function irACheckout() {
    // Aquí colocas la URL del HTML al que deseas redirigir
    window.location.href = "./empresa.html";  // Cambia "checkout.html" por la URL de tu archivo
}