let edad = prompt("Ingresa tu edad:");

while (true) {
  if (isNaN(edad)) {
    // Si el usuario ingresa una cadena que no es un número, intenta convertirla a número
    edad = parseInt(edad, 10);
    if (isNaN(edad)) {
      alert("Por favor, ingresa una edad válida.");
      edad = prompt("Ingresa tu edad:");
    }
  } else if (edad < 18) {
    alert("Lo sentimos, debes ser mayor de 18 años para acceder a este sitio.");
    edad = prompt("Ingresa tu edad:");
  } else {
    break;
  }
}

if (edad >= 18) {
  alert("Acceso permitido.");
}



