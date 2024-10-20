// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Agregar un evento de clic al botón
    document.getElementById("alertButton").addEventListener("click", function() {
        const { DateTime } = luxon;
        const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
        
        Swal.fire({
            title: '¡Bienvenido a Vinos Argentinos!',
            text: `La fecha y hora actual es: ${now}`,
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
    });
  
      // Función para validar la edad del usuario
      function validarEdad() {
        Swal.fire({
            title: 'Verificación de edad',
            text: 'Ingresa tu edad:',
            input: 'number',
            inputAttributes: {
                min: 1,
                max: 120,
                step: 1,
            },
            inputPlaceholder: 'Tu edad',
            showCancelButton: false,
            confirmButtonText: 'Enviar',
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value || isNaN(value)) {
                    return 'Por favor, ingresa una edad válida.';
                } else if (value < 18) {
                    return 'Lo sentimos, debes ser mayor de 18 años para acceder a este sitio.';
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Acceso permitido',
                    text: 'Bienvenido/a al sitio',
                    icon: 'success'
                });
            }
        });
    }

    // Llamar a la función de validación de edad
    validarEdad()
  
    // Información adicional sobre vinos argentinos
    const infoContent = `
        <h3>Orígenes de los Vinos Argentinos</h3>
        <p>Los vinos argentinos tienen una rica historia que se remonta a la llegada de los colonizadores españoles en el siglo XVI. Desde entonces, la viticultura ha evolucionado significativamente, especialmente en regiones como Mendoza, que se ha convertido en el corazón de la producción vinícola en el país.</p>
        <p>Hoy en día, Argentina es reconocida mundialmente por su Malbec, pero también produce una variedad de cepas que son muy valoradas en el mercado internacional. La combinación de climas diversos, suelos ricos y técnicas de vinificación modernas ha permitido a los productores argentinos destacarse en competiciones y ferias de vino alrededor del mundo.</p>
  
        <h3>Tipos de Tierra y Estratos en Argentina</h3>
        <p>Argentina posee una geografía única que influye en la calidad y el perfil de sus vinos. Los suelos varían desde suelos aluviales en Mendoza, que proporcionan un drenaje excelente y nutrientes ideales para el cultivo de la vid, hasta suelos de arcilla y piedra en regiones como Patagonia.</p>
        <p>En Mendoza, por ejemplo, la combinación de estratos de grava, arena y arcilla en sus viñedos, junto con el clima árido, permite la producción de uvas de alta calidad. Estos factores, junto con el cuidado y la pasión de los viticultores argentinos, son la clave para el éxito de sus vinos.</p>
    `;
  
   
    document.getElementById('infoContainer').innerHTML = infoContent;
  });