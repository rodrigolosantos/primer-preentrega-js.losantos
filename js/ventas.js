let nombreUsuario = prompt(" Por favor, para continuar le solicitamos que ingrese su nombre:")

alert("¡Hola " + nombreUsuario + "! Bienvenido a nuestra Bodega.")



/* Productos disponibles

"Malbec - Mendoza", precio: $1200 
"Torrontés - Salta", precio: $1000 
"Cabernet Sauvignon - Mendozacto", precio: $1800 
"Syrah - San Juan", precio: $1500 
"Bonarda - Mendoza", precio: $1700 
"Chardonnay - Patagonia", precio: $1900 
"Tannat - Salta", precio: $1100 
"Cabernet Franc - Salta", precio: $1300 
"Pinot Noir - Patagonia", precio: $1500 
*/


let total = 0;
let seleccionUsuario = prompt(
    `Los productos disponibles son:

"Malbec", precio: $1200 
"Torrontés", precio: $1000 
"Cabernet Sauvignon", precio: $1800 
"Syrah", precio: $1500 
"Bonarda", precio: $1700 
"Chardonnay", precio: $1900 
"Tannat", precio: $1100 
"Cabernet Franc", precio: $1300 
"Pinot Noir", precio: $1500

Ingresá el nombre del producto que deseas comprar o "comprar" para finalizar:
`).toLowerCase();

while (seleccionUsuario !== "comprar") {
    switch (seleccionUsuario) {
        case "malbec":
            total += 1200;
            seleccionUsuario = prompt(
                `Has elegido un Malbec. Tu nuevo total es de $${total}.
                
                ¿Desea comprar algo más? Tenemos disponible:
                "Torrontés", precio: $1000 
                "Cabernet Sauvignon", precio: $1800 
                "Syrah", precio: $1500 
                "Bonarda", precio: $1700 
                "Chardonnay", precio: $1900 
                "Tannat", precio: $1100 
                "Cabernet Franc", precio: $1300 
                "Pinot Noir", precio: $1500
                
                Ingresá el nombre del producto o "comprar" para finalizar:
                `).toLowerCase();
            break;

        case "torrontés":
        case "torrontes": 
            total += 1000;
            seleccionUsuario = prompt(
                `Has elegido un Torrontés. Tu nuevo total es de $${total}.
                
                ¿Desea comprar algo más? Tenemos disponible:
                "Cabernet Sauvignon", precio: $1800 
                "Syrah", precio: $1500 
                "Bonarda", precio: $1700 
                "Chardonnay", precio: $1900 
                "Tannat", precio: $1100 
                "Cabernet Franc", precio: $1300 
                "Pinot Noir", precio: $1500
                
                Ingresá el nombre del producto o "comprar" para finalizar:
                `).toLowerCase();
            break;

        case "cabernet sauvignon":
            total += 1800;
            seleccionUsuario = prompt(
                `Has elegido un Cabernet Sauvignon. Tu nuevo total es de $${total}.
                
                ¿Desea comprar algo más? Tenemos disponible:
                "Syrah", precio: $1500 
                "Bonarda", precio: $1700 
                "Chardonnay", precio: $1900 
                "Tannat", precio: $1100 
                "Cabernet Franc", precio: $1300 
                "Pinot Noir", precio: $1500
                
                Ingresá el nombre del producto o "comprar" para finalizar:
                `).toLowerCase();
            break;

        case "syrah":
            total += 1500;
            seleccionUsuario = prompt(
                `Has elegido un Syrah. Tu nuevo total es de $${total}.
                
                ¿Desea comprar algo más? Tenemos disponible:
                "Bonarda", precio: $1700 
                "Chardonnay", precio: $1900 
                "Tannat", precio: $1100 
                "Cabernet Franc", precio: $1300 
                "Pinot Noir", precio: $1500
                
                Ingresá el nombre del producto o "comprar" para finalizar:
                `).toLowerCase();
            break;

        case "bonarda":
            total += 1700;
            seleccionUsuario = prompt(
                `Has elegido un Bonarda. Tu nuevo total es de $${total}.
                
                ¿Desea comprar algo más? Tenemos disponible:
                "Chardonnay", precio: $1900 
                "Tannat", precio: $1100 
                "Cabernet Franc", precio: $1300 
                "Pinot Noir", precio: $1500
                
                Ingresá el nombre del producto o "comprar" para finalizar:
                `).toLowerCase();
            break;

        case "chardonnay":
            total += 1900;
            seleccionUsuario = prompt(
                `Has elegido un Chardonnay. Tu nuevo total es de $${total}.
                
                ¿Desea comprar algo más? Tenemos disponible:
                "Tannat", precio: $1100 
                "Cabernet Franc", precio: $1300 
                "Pinot Noir", precio: $1500
                
                Ingresá el nombre del producto o "comprar" para finalizar:
                `).toLowerCase();
            break;

        case "tannat":
            total += 1100;
            seleccionUsuario = prompt(
                `Has elegido un Tannat. Tu nuevo total es de $${total}.
                
                ¿Desea comprar algo más? Tenemos disponible:
                "Cabernet Franc", precio: $1300 
                "Pinot Noir", precio: $1500
                
                Ingrese el nombre del producto o "comprar" para finalizar:
                `).toLowerCase();
            break;

        case "cabernet franc":
            total += 1300;
            seleccionUsuario = prompt(
                `Has elegido un Cabernet Franc. Tu nuevo total es de $${total}.
                
                ¿Desea comprar algo más? Tenemos disponible:
                "Pinot Noir", precio: $1500
                
                Ingresá el nombre del producto o "comprar" para finalizar:
                `).toLowerCase();
            break;

        case "pinot noir":
            total += 1500;
            seleccionUsuario = prompt(
                `Has elegido un Pinot Noir. Tu nuevo total es de $${total}.
                
                Si deseas finalizar la compra ingresá "comprar", caso contrario podes seguir eligiendo productos:
                `).toLowerCase();
            break;

        default:
            seleccionUsuario = prompt(
                `Producto no reconocido. Por favor, ingresá un producto válido o "comprar" para finalizar:
                "Malbec", "Torrontés", "Cabernet Sauvignon", "Syrah", "Bonarda", "Chardonnay", "Tannat", "Cabernet Franc", "Pinot Noir"
                `).toLowerCase();
            break;
    }
}

alert(`El total a pagar es $${total}.`);


class Dato {
    constructor(nombre, apellido, correo) {
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
    }
}
alert("Estás por realizar una compra" )

const datos = []

const agregarDato = () => {
    let nombre = prompt("Ingresa tu Nombre:")
    let apellido = prompt("Ingresa tu Apellido:")
    let correo = prompt("Ingresa tu e-mail:")

    datos.push(new Dato(nombre, apellido, correo))
}


const mostrarDatos = () => {
    
    let mensaje = "Tus datos de facturacion son: \n"

    for (let dato of datos) {
        mensaje += `\nNombre: ${dato.nombre}\nApellido: ${dato.apellido}\nE-mail: ${dato.correo}\n`;    
    }

    alert(mensaje)

    alert("Gracias por tu compra.\n Recibirás un e-mail cuando esté disponible tu factura" )
}

const simulador = () => {
    let continuar = true

    while (continuar) {
        agregarDato()
        continuar = confirm("Si queres agregar mas datos de contacto apretá -Aceptar-, de lo contrario apretá -Cancelar- para continuar")
    }

    mostrarDatos()
}

simulador()