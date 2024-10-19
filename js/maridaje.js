// Datos de vinos
const wineries = [
    { nombre: "Cabernet Franc", tipo: "Tinto", img: "../imagenes/cabernet franc.jpg", maridaje: "Marida perfectamente con carnes rojas a la parrilla." },
    { nombre: "Cabernet Sauvignon", tipo: "Tinto", img: "../imagenes/cabernet sauvignon.jpg", maridaje: "Ideal para acompañar pescados y mariscos." },
    { nombre: "Chardonnay", tipo: "Blanco", img: "../imagenes/chardonnay.jpg", maridaje: "Excelente para maridar con quesos suaves y aves." },
    { nombre: "Bonarda", tipo: "Tinto", img: "../imagenes/bonarda.jpg", maridaje: "Ideal para platos de carne." },
    { nombre: "Malbec", tipo: "Tinto", img: "../imagenes/malbec.jpg", maridaje: "Perfecto con parrillas." },
    { nombre: "Pinot Noir", tipo: "Blanco", img: "../imagenes/pinot noir.jpg", maridaje: "Acompaña bien aves y quesos." },
    { nombre: "Syrah", tipo: "Tinto", img: "../imagenes/syrah.jpg", maridaje: "Excelente con carne de caza." },
    { nombre: "Tannat", tipo: "Tinto", img: "../imagenes/tannat.jpg", maridaje: "Combina con platos robustos." },
    { nombre: "Torrontés", tipo: "Blanco", img: "../imagenes/torrontes.jpg", maridaje: "Acompaña a la perfección los mariscos." }
];

// Almacena datos en local storage
localStorage.setItem('wineriesData', JSON.stringify(wineries));

// Recupera datos del local storage
const savedWineries = JSON.parse(localStorage.getItem('wineriesData'));

// Mostra vinos en la página
const displayWineries = (wineries) => {
    const wineryContainer = document.getElementById('wineries');
    const winerySelect = document.getElementById('winerySelect');

    wineries.forEach(winery => {
        // Tarjeta de vino
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <img src="${winery.img}" class="card-img-top" alt="${winery.nombre}">
                <div class="card-body text-center">
                    <h5 class="card-title">${winery.nombre}</h5>
                    <p class="card-text">${winery.maridaje}</p>
                </div>
            </div>
        `;
        wineryContainer.appendChild(card);

        // Opción para el selector
        const option = document.createElement('option');
        option.value = winery.nombre;
        option.textContent = winery.nombre;
        winerySelect.appendChild(option);
    });
};

// Sugerir maridaje
const suggestPairing = () => {
    let maridaje = prompt("¿Qué vas a comer hoy? (pescados y mariscos, carnes, vegetales, postres)");
    
    switch (maridaje) {
        case 'pescados y mariscos':
            Swal.fire('Sugerencia', 'Para acompañar pescados y mariscos, los vinos blancos son la opción más adecuada.', 'info');
            break;
        case 'carnes':
            Swal.fire('Sugerencia', 'Con un plato de carne se recomienda tomar vinos tintos.', 'info');
            break;
        case 'vegetales':
            Swal.fire('Sugerencia', 'Con un plato de vegetales se recomienda tomar vinos blancos.', 'info');
            break;
        case 'postres':
            Swal.fire('Sugerencia', 'Con un plato de postres se recomienda tomar vinos dulces.', 'info');
            break;
        default:
            Swal.fire('Error', 'Por favor, elige una opción válida de maridaje.', 'error');
            break;
    }
};

// Manejar el envío de reseñas
const handleReviewSubmit = (event) => {
    event.preventDefault();

    const selectedWinery = document.getElementById('winerySelect').value;
    const reviewText = document.getElementById('reviewInput').value;

    if (selectedWinery && reviewText) {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
        
        if (!reviews[selectedWinery]) {
            reviews[selectedWinery] = [];
        }

        reviews[selectedWinery].push(reviewText);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        
        document.getElementById('reviewForm').reset();
        displayReviews();
    }
};

// Muestra reseñas en formato de blog
const displayReviews = () => {
    const reviewsContainer = document.getElementById('reviews');
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    reviewsContainer.innerHTML = ''; // Limpiar contenedor de reseñas

    for (const winery in reviews) {
        const wineryReviews = document.createElement('div');
        wineryReviews.className = 'col-md-12 review-card';
        wineryReviews.innerHTML = `<h4>Reseñas para ${winery}:</h4>`;
        
        reviews[winery].forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'card mb-2';
            reviewItem.innerHTML = `
                <div class="card-body">
                    <p class="card-text">${review}</p>
                </div>
            `;
            wineryReviews.appendChild(reviewItem);
        });

        reviewsContainer.appendChild(wineryReviews);
    }
};

// Borra reseñas
const clearReviews = () => {
    localStorage.removeItem('reviews');
    Swal.fire('Reseñas Borradas', 'Las reseñas han sido borradas exitosamente.', 'success');
    displayReviews(); // Actualizar la vista
};

// Inicializa la página
document.getElementById('maridajeBtn').addEventListener('click', suggestPairing);
document.getElementById('reviewForm').addEventListener('submit', handleReviewSubmit);
document.getElementById('clearReviewsBtn').addEventListener('click', clearReviews);

// Muetra reseñas en la página al cargar
displayWineries(savedWineries);
displayReviews();

