

let maridaje = prompt ("¿Que vas a comer hoy? pescados y mariscos, carnes, vegetales, postres?");

switch (maridaje) {
    case 'pescados y mariscos':
        alert('Para acompañar pescados y mariscos, los vinos blancos son la opción más adecuada, destacando por su frescura y acidez. Un Albariño, con sus notas de melocotón y cítricos, resalta los sabores marinos, mientras que un Sauvignon Blanc aporta un toque herbáceo que complementa perfectamente las ensaladas de mariscos. Además, un vino espumoso como el Champagne o Cava, con su efervescencia, limpia el paladar entre bocado y bocado, realzando la experiencia gastronómica.');
        break;
    case 'carnes':
        alert ('Con un plato de carne se recomienda tomar vinos tintos, como el Cabernet Sauvignon o el Malbec, que complementan la riqueza y sabor intenso de la carne. El Syrah/Shiraz también es una excelente opción, ya que su sabor ahumado y especiado realza la experiencia gastronómica. Estos vinos tintos equilibran la grasa y la textura de la carne, creando un matrimonio perfecto.');
        break;
    case 'vegetales':
        alert('Con un plato de vegetales se recomienda tomar vinos blancos, como el Sauvignon Blanc o el Pinot Grigio, que complementan la frescura y sabor delicado de los vegetales. El Riesling también es una excelente opción, ya que su acidez y sabor floral realzan los sabores naturales de los vegetales. Estos vinos blancos refrescan y equilibran la ligereza de los vegetales, creando un matrimonio armonioso.');
        break;
    case 'postres':
        alert('Con un plato de postres se recomienda tomar vinos dulces y aromáticos, como el Moscatel o el Vin Santo, que complementan la dulzura y riqueza de los postres. El Tawny Port también es una excelente opción, ya que su sabor nutrido y afrutado realza los sabores caramelizados y dulces de los postres. Estos vinos dulces y aromáticos equilibran la riqueza de los postres, creando un final perfecto para la comida.');
        break;
        default:
            alert( 'Aqui le damos una idea de maridaje');
            break;
}

