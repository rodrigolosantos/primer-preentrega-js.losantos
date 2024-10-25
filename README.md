Vinos Argentinos - Página Web
Este proyecto es una página web dedicada a la promoción de los mejores vinos de Argentina, con un enfoque en la historia, regiones y tipos de uvas más destacadas del país.
Tecnologías Utilizadas
•	HTML5: Estructura del sitio.
•	Bootstrap 5: Estilos responsivos y diseño moderno.
•	Font Awesome: Iconos utilizados en la navegación.
•	JavaScript: Lógica de interacción y alertas.
•	Luxon: Manejo de fechas y horas en el navegador.
•	SweetAlert2: Ventanas emergentes elegantes para alertas y validaciones.
Funcionalidades
1.	Verificación de Edad: Al cargar la página, se solicita al usuario ingresar su edad. Solo se permite el acceso si tiene 18 años o más.
2.	Mostrar Fecha y Hora: Botón interactivo que muestra la fecha y hora local del usuario utilizando Luxon.
3.	Información Adicional: Sección con datos históricos y geográficos sobre la producción de vinos en Argentina.

------------------------------------------------VENTA DE VINOS---------------------------------------------
Características Principales
1.	Ingreso del Nombre del Usuario:
o	Al cargar la página, si el nombre del usuario no está guardado, se le solicita a través de un modal y se almacena en el localStorage. Si ya está guardado, se le muestra un mensaje de bienvenida.
2.	Visualización de Productos:
o	Los productos de la tienda son mostrados dinámicamente con información sobre su nombre, precio y una imagen.
3.	Carrito de Compras:
o	Los usuarios pueden agregar productos al carrito. El carrito permite aumentar o disminuir la cantidad de productos, así como eliminarlos.
o	El precio total se actualiza automáticamente.
4.	Finalización de Compra:
o	Al hacer clic en "Finalizar Compra", si el carrito está vacío, se muestra una alerta con SweetAlert2.
o	Si el carrito contiene productos, se guarda la información en localStorage y se redirige a una página de facturación.
---------------------------------------------------FACTURACION-------------------------------------------------------
Interacción del Usuario
1.	Visualización de Productos:
o	Al cargar la página, se muestran los productos seleccionados en el carrito de compras, junto con su precio y cantidad.
o	Si no hay productos en el carrito, se informa al usuario que no hay productos disponibles.
2.	Formulario de Facturación:
o	El usuario debe completar el formulario con su Nombre/Razón social, Dirección, Fecha Aproximada de Entrega, y Email.
o	Los campos son obligatorios. Si alguno está vacío, se muestra una alerta.
3.	Finalización de la Compra:
o	Al hacer clic en el botón "Finalizar Compra", se detiene la acción predeterminada del formulario y se verifica que todos los campos estén completos.
o	Se muestra una ventana de confirmación con los detalles de la compra para que el usuario los verifique.
4.	Confirmación de Compra:
o	Si el usuario confirma que los datos son correctos, se muestra un mensaje de éxito utilizando SweetAlert, informando que la factura será enviada al correo proporcionado.
o	Se ofrece al usuario la opción de seguir comprando o de ir a la sección de maridaje de vinos.
5.	Navegación:
o	El usuario puede navegar a otras secciones de la página utilizando el menú de navegación en la parte superior, que incluye enlaces a "Inicio", "Venta de Vinos", "Maridaje", y "Datos de Compra".
-------------------------------------------------MARIDAJE Y RESEÑAS-----------------------------------------------
Interacciones del Usuario:
1.	Sugerir Maridaje:
o	Al hacer clic en el botón "Sugerir Maridaje", se abre un cuadro de diálogo que pregunta al usuario qué va a comer. Dependiendo de la respuesta (pescados y mariscos, carnes, vegetales o postres), se muestra una sugerencia de maridaje adecuada.
2.	Dejar Reseña:
o	Los usuarios pueden seleccionar un vino de un menú desplegable y escribir una reseña en un cuadro de texto. Al hacer clic en "Enviar Reseña", la reseña se almacena en el local storage y se muestra en la sección de reseñas.
3.	Visualizar Reseñas:
o	Las reseñas de los usuarios se muestran en formato de tarjetas, organizadas por vino. Cada vino tiene su sección de reseñas, lo que permite a los usuarios leer las opiniones de otros.
4.	Borrar Reseñas:
o	Al hacer clic en el botón "Borrar Reseñas", se eliminan todas las reseñas almacenadas y se actualiza la vista para reflejar que no hay reseñas disponibles.
Requisitos
•	Este proyecto utiliza Bootstrap para el diseño, SweetAlert2 para las alertas estilizadas y Luxon para la manipulación de fechas (aunque no se utiliza en esta versión del código). Asegúrate de tener conexión a Internet para cargar estas bibliotecas.
Cómo Usar
1.	Visita la página de Maridaje de Vinos.
2.	Explora los vinos y haz clic en "Sugerir Maridaje" para recibir recomendaciones.
3.	Selecciona un vino y deja tu reseña.
4.	Revisa lo que otros han escrito en la sección de Reseñas.
5.	Si deseas borrar las reseñas, haz clic en el botón correspondiente.

Creador: Rodrigo Federico Javier Losantos ©  .2024
2024 Vinos Argentinos. Todos los derechos reservados.
