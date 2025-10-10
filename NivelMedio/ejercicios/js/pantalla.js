// ✨ --- ARRAY ACTUALIZADO CON IMÁGENES Y PRECIOS REALES --- ✨
const pantallas = [
  { 
    name: "ASUS TUF Gaming 23.8'' 1080p", 
    img: "https://www.pcware.com.co/wp-content/uploads/2024/01/X221_001-1200x675.jpg",
    price: "$850.000 COP"
  },
  { 
    name: "Samsung Odyssey G5 27'' QHD", 
    img: "https://www.pcware.com.co/wp-content/uploads/2024/01/X221_001-1200x675.jpg",
    price: "$1.450.000 COP"
  },
  { 
    name: "LG UltraGear 32'' 4K UHD", 
    img: "https://www.pcware.com.co/wp-content/uploads/2024/01/X221_001-1200x675.jpg",
    price: "$3.200.000 COP"
  },
  { 
    name: "Dell UltraSharp 27'' IPS", 
    img: "https://www.pcware.com.co/wp-content/uploads/2024/01/X221_001-1200x675.jpg",
    price: "$1.900.000 COP"
  },
  { 
    name: "Alienware Curvo 34'' QD-OLED", 
    img: "https://www.pcware.com.co/wp-content/uploads/2024/01/X221_001-1200x675.jpg",
    price: "$5.800.000 COP"
  },
  { 
    name: "MSI Optix G273 27'' 165Hz", 
    img: "https://www.pcware.com.co/wp-content/uploads/2024/01/X221_001-1200x675.jpg",
    price: "$1.350.000 COP"
  },
  { 
    name: "LG C2 Series 42'' OLED evo", 
    img: "https://www.pcware.com.co/wp-content/uploads/2024/01/X221_001-1200x675.jpg",
    price: "$4.500.000 COP"
  },
  { 
    name: "Acer Nitro 21.5'' FHD 100Hz", 
    img: "https://www.pcware.com.co/wp-content/uploads/2024/01/X221_001-1200x675.jpg",
    price: "$650.000 COP"
  },
  { 
    name: "Samsung ViewFinity S9 27'' 5K", 
    img: "https://www.pcware.com.co/wp-content/uploads/2024/01/X221_001-1200x675.jpg",
    price: "$6.200.000 COP"
  }
];

const body = document.body;

body.innerHTML = "";

// Título <h1>
const h1 = document.createElement("h1");
h1.textContent = "Elige tu Próximo Monitor Gamer"; // Título actualizado
body.appendChild(h1);

// === Contenedor principal ===
const contentPrincipal = document.createElement("div");
contentPrincipal.className = "content-principal";
body.appendChild(contentPrincipal);

function crearTarjetaPantalla({ name, img, price }, index) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "content-pantallas";
  tarjeta.dataset.index = index;

  const contImg = document.createElement("div");
  contImg.className = "content-img";
  const imagen = document.createElement("img");
  imagen.src = img || ""; 
  imagen.alt = name || `pantalla-${index}`;
  imagen.style.width = "100%";
  imagen.style.height = "100%";
  imagen.style.objectFit = "cover";
  contImg.appendChild(imagen);

  const contName = document.createElement("div");
  contName.className = "content-name";
  const pName = document.createElement("p");
  pName.className = "name-pantalla";
  pName.textContent = name || "Pantalla sin nombre";
  contName.appendChild(pName);

  const contBuy = document.createElement('div');
  contBuy.className = 'content-buy';

  const pPrice = document.createElement('p');
  pPrice.className = 'price-pantalla';
  pPrice.textContent = price || '$ --';
  
  const btnBuy = document.createElement('button');
  btnBuy.className = 'btn-buy';
  btnBuy.textContent = 'Comprar Ahora';

  contBuy.append(pPrice, btnBuy);

  tarjeta.append(contImg, contName, contBuy); 

  tarjeta.addEventListener("click", () => {
    tarjeta.classList.toggle("selected");
    console.log(`Seleccionaste: ${pName.textContent}`);
  });
  
  // Evento para el botón de comprar
  btnBuy.addEventListener('click', (event) => {
    // Detiene la propagación para que el clic no seleccione la tarjeta
    event.stopPropagation();
    
    // Muestra una alerta o mensaje de compra
    window.confirm(`¿Decea comprar la pantalla ${name} por ${price}!`);
    console.log(`Comprando: ${name} | Precio: ${price}`);
  });

  return tarjeta;
}

// === Rellenar la cuadrícula ===
const targetCount = 9;
for (let i = 0; i < targetCount; i++) {
  const data = pantallas[i % pantallas.length];
  // Pasamos el objeto completo a la función
  const tarjeta = crearTarjetaPantalla(data, i);
  contentPrincipal.appendChild(tarjeta);
}

