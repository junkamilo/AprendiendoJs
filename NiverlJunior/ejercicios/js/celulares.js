// DOM JS
const contentBody = document.querySelector("body");

// Crear elementos
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const trHead = document.createElement("tr");

// Aplicar estilos con Tailwind
table.className = "table-auto w-[90%] mx-auto mt-10 border border-gray-400 rounded-2xl shadow-lg overflow-hidden";
thead.className = "bg-gray-800 text-white";
tbody.className = "bg-white text-gray-700";
trHead.className = "text-lg";

const encabezados = ["Nombre", "Marca", "Modelo", "Color", "Peso", "Pantalla", "Cámara", "RAM"];

encabezados.forEach(titulo => {
  const th = document.createElement("th");
  th.textContent = titulo;
  th.className = "px-4 py-2 font-semibold";
  trHead.appendChild(th);
});

thead.appendChild(trHead);
table.append(thead, tbody);
contentBody.appendChild(table);

/**
 * clase principal
 */
class celulares {
  constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam, marcaCelular, modelo, nameCelular) {
    this.color = color;
    this.peso = peso;
    this.resolucionPantalla = resolucionPantalla;
    this.resolucionCamara = resolucionCamara;
    this.memoriaRam = memoriaRam;
    this.marcaCelular = marcaCelular;
    this.modelo = modelo;
    this.nameCelular = nameCelular;
  }

  // Modificado: ahora imprime la fila en la tabla
  infoCelular() {
    const tr = document.createElement("tr");
    tr.className = "hover:bg-gray-100 transition text-sm text-gray-700";

    const data = [
      this.nameCelular,
      this.marcaCelular,
      this.modelo,
      this.color,
      this.peso,
      this.resolucionPantalla,
      this.resolucionCamara,
      this.memoriaRam
    ];

    data.forEach(text => {
      const td = document.createElement("td");
      td.textContent = text;
      td.className = "px-4 py-2 border-b border-gray-200";
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  }
}
/**
 * celulares de baja
 */
class CelularesBaja extends celulares {
    constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam, marcaCelular, modelo, nameCelular) {
        super(color, peso, resolucionPantalla, resolucionCamara, memoriaRam, marcaCelular, modelo, nameCelular);
    }

    // 5 modelos de cada marca
    static samsung() {
        return [
            new CelularesBaja("Negro", "180g", "720p", "13MP", "3GB", "Samsung", "A03 Core", "Galaxy A03 Core"),
            new CelularesBaja("Gris", "190g", "720p", "8MP", "2GB", "Samsung", "A04e", "Galaxy A04e"),
            new CelularesBaja("Azul", "195g", "720p", "13MP", "3GB", "Samsung", "A05", "Galaxy A05"),
            new CelularesBaja("Blanco", "185g", "720p", "8MP", "4GB", "Samsung", "M04", "Galaxy M04"),
            new CelularesBaja("Negro", "200g", "720p", "13MP", "4GB", "Samsung", "A13", "Galaxy A13")
        ];
    }

    static xiaomi() {
        return [
            new CelularesBaja("Azul", "190g", "720p", "8MP", "3GB", "Xiaomi", "Redmi A1", "Redmi A1"),
            new CelularesBaja("Negro", "192g", "720p", "13MP", "4GB", "Xiaomi", "Redmi 12C", "Redmi 12C"),
            new CelularesBaja("Verde", "185g", "720p", "8MP", "3GB", "Xiaomi", "Redmi 9A", "Redmi 9A"),
            new CelularesBaja("Gris", "200g", "720p", "13MP", "4GB", "Xiaomi", "Redmi 10A", "Redmi 10A"),
            new CelularesBaja("Plateado", "195g", "720p", "13MP", "4GB", "Xiaomi", "Redmi 12", "Redmi 12")
        ];
    }

    static motorola() {
        return [
            new CelularesBaja("Negro", "185g", "720p", "13MP", "4GB", "Motorola", "E13", "Moto E13"),
            new CelularesBaja("Blanco", "190g", "720p", "8MP", "3GB", "Motorola", "E7", "Moto E7"),
            new CelularesBaja("Azul", "180g", "720p", "13MP", "3GB", "Motorola", "G04", "Moto G04"),
            new CelularesBaja("Gris", "185g", "720p", "8MP", "2GB", "Motorola", "E6i", "Moto E6i"),
            new CelularesBaja("Negro", "195g", "720p", "13MP", "4GB", "Motorola", "E22i", "Moto E22i")
        ];
    }

    static pixel() {
        return [
            new CelularesBaja("Negro", "190g", "720p", "12MP", "4GB", "Google", "3a", "Pixel 3a"),
            new CelularesBaja("Blanco", "195g", "720p", "12MP", "4GB", "Google", "4a", "Pixel 4a"),
            new CelularesBaja("Gris", "200g", "720p", "12MP", "4GB", "Google", "5a", "Pixel 5a"),
            new CelularesBaja("Verde", "190g", "720p", "12MP", "4GB", "Google", "6a", "Pixel 6a"),
            new CelularesBaja("Negro", "195g", "720p", "12MP", "4GB", "Google", "7a", "Pixel 7a")
        ];
    }

    static iphone() {
        return [
            new CelularesBaja("Negro", "148g", "720p", "12MP", "3GB", "Apple", "SE (2020)", "iPhone SE 2020"),
            new CelularesBaja("Blanco", "150g", "720p", "12MP", "3GB", "Apple", "SE (2022)", "iPhone SE 2022"),
            new CelularesBaja("Rojo", "148g", "720p", "12MP", "3GB", "Apple", "7", "iPhone 7"),
            new CelularesBaja("Gris", "150g", "720p", "12MP", "2GB", "Apple", "6S", "iPhone 6S"),
            new CelularesBaja("Oro", "155g", "720p", "12MP", "2GB", "Apple", "6", "iPhone 6")
        ];
    }
}



/**
 * celulares de  media
 */
class CelularesMedia extends celulares{
    constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam, marcaCelular, modelo, nameCelular) {
        super(color, peso, resolucionPantalla, resolucionCamara, memoriaRam, marcaCelular, modelo, nameCelular);
    }
    static samsung() {
        return [
            new CelularesMedia("Negro", "179g", "1080p", "50MP", "6GB", "Samsung", "A15", "Galaxy A15"),
            new CelularesMedia("Azul", "185g", "1080p", "64MP", "6GB", "Samsung", "A24", "Galaxy A24"),
            new CelularesMedia("Verde", "188g", "1080p", "50MP", "8GB", "Samsung", "M14", "Galaxy M14"),
            new CelularesMedia("Gris", "180g", "1080p", "64MP", "8GB", "Samsung", "A25", "Galaxy A25"),
            new CelularesMedia("Blanco", "178g", "1080p", "50MP", "6GB", "Samsung", "M34", "Galaxy M34")
        ];
    }

    static xiaomi() {
        return [
            new CelularesMedia("Azul", "179g", "1080p", "50MP", "6GB", "Xiaomi", "Redmi Note 12", "Redmi Note 12"),
            new CelularesMedia("Negro", "185g", "1080p", "64MP", "8GB", "Xiaomi", "Redmi Note 13", "Redmi Note 13"),
            new CelularesMedia("Blanco", "190g", "1080p", "108MP", "8GB", "Xiaomi", "Redmi Note 12 Pro", "Redmi Note 12 Pro"),
            new CelularesMedia("Verde", "182g", "1080p", "64MP", "6GB", "Xiaomi", "Redmi 13", "Redmi 13"),
            new CelularesMedia("Gris", "184g", "1080p", "50MP", "6GB", "Xiaomi", "Poco M6 Pro", "Poco M6 Pro")
        ];
    }

    static motorola() {
        return [
            new CelularesMedia("Negro", "185g", "1080p", "50MP", "8GB", "Motorola", "G14", "Moto G14"),
            new CelularesMedia("Blanco", "190g", "1080p", "64MP", "8GB", "Motorola", "G32", "Moto G32"),
            new CelularesMedia("Verde", "184g", "1080p", "50MP", "6GB", "Motorola", "G54", "Moto G54"),
            new CelularesMedia("Azul", "186g", "1080p", "50MP", "8GB", "Motorola", "Edge 30 Neo", "Edge 30 Neo"),
            new CelularesMedia("Gris", "188g", "1080p", "64MP", "8GB", "Motorola", "G73", "Moto G73")
        ];
    }

    static pixel() {
        return [
            new CelularesMedia("Negro", "190g", "1080p", "12.2MP", "6GB", "Google", "Pixel 4a 5G", "Pixel 4a 5G"),
            new CelularesMedia("Gris", "193g", "1080p", "12.2MP", "6GB", "Google", "Pixel 5", "Pixel 5"),
            new CelularesMedia("Blanco", "197g", "1080p", "12.2MP", "6GB", "Google", "Pixel 5a 5G", "Pixel 5a 5G"),
            new CelularesMedia("Verde", "190g", "1080p", "12.2MP", "8GB", "Google", "Pixel 6a", "Pixel 6a"),
            new CelularesMedia("Negro", "188g", "1080p", "12.2MP", "8GB", "Google", "Pixel 7a", "Pixel 7a")
        ];
    }

    static iphone() {
        return [
            new CelularesMedia("Blanco", "174g", "1080p", "12MP", "4GB", "Apple", "11", "iPhone 11"),
            new CelularesMedia("Negro", "172g", "1080p", "12MP", "4GB", "Apple", "12 Mini", "iPhone 12 Mini"),
            new CelularesMedia("Rojo", "179g", "1080p", "12MP", "4GB", "Apple", "12", "iPhone 12"),
            new CelularesMedia("Verde", "180g", "1080p", "12MP", "4GB", "Apple", "13 Mini", "iPhone 13 Mini"),
            new CelularesMedia("Azul", "182g", "1080p", "12MP", "4GB", "Apple", "13", "iPhone 13")
        ];
    }
}


/**
 * celulares de alta
 */
class CelularesAlta extends celulares{
    static samsung() {
        return [
            new CelularesAlta("Negro", "195g", "QHD+", "200MP", "12GB", "Samsung", "S22 Ultra", "Galaxy S22 Ultra"),
            new CelularesAlta("Blanco", "198g", "QHD+", "200MP", "12GB", "Samsung", "S23 Ultra", "Galaxy S23 Ultra"),
            new CelularesAlta("Gris", "200g", "QHD+", "200MP", "12GB", "Samsung", "S24 Ultra", "Galaxy S24 Ultra"),
            new CelularesAlta("Azul", "190g", "QHD+", "108MP", "12GB", "Samsung", "Z Fold 5", "Galaxy Z Fold 5"),
            new CelularesAlta("Verde", "185g", "QHD+", "108MP", "12GB", "Samsung", "Z Flip 5", "Galaxy Z Flip 5")
        ];
    }

    static xiaomi() {
        return [
            new CelularesAlta("Negro", "190g", "QHD+", "200MP", "12GB", "Xiaomi", "13 Pro", "Xiaomi 13 Pro"),
            new CelularesAlta("Blanco", "195g", "QHD+", "200MP", "16GB", "Xiaomi", "14 Pro", "Xiaomi 14 Pro"),
            new CelularesAlta("Azul", "192g", "QHD+", "108MP", "12GB", "Xiaomi", "13T Pro", "Xiaomi 13T Pro"),
            new CelularesAlta("Gris", "200g", "QHD+", "200MP", "16GB", "Xiaomi", "14 Ultra", "Xiaomi 14 Ultra"),
            new CelularesAlta("Verde", "198g", "QHD+", "200MP", "12GB", "Xiaomi", "Mix Fold 3", "Mix Fold 3")
        ];
    }

    static motorola() {
        return [
            new CelularesAlta("Negro", "185g", "QHD+", "200MP", "12GB", "Motorola", "Edge 40 Pro", "Edge 40 Pro"),
            new CelularesAlta("Azul", "190g", "QHD+", "200MP", "12GB", "Motorola", "Edge 50 Pro", "Edge 50 Pro"),
            new CelularesAlta("Gris", "195g", "QHD+", "200MP", "12GB", "Motorola", "Edge 30 Ultra", "Edge 30 Ultra"),
            new CelularesAlta("Verde", "187g", "QHD+", "108MP", "12GB", "Motorola", "Edge 40 Ultra", "Edge 40 Ultra"),
            new CelularesAlta("Blanco", "189g", "QHD+", "200MP", "12GB", "Motorola", "Edge 50 Ultra", "Edge 50 Ultra")
        ];
    }

    static pixel() {
        return [
            new CelularesAlta("Negro", "193g", "QHD+", "50MP", "8GB", "Google", "7 Pro", "Pixel 7 Pro"),
            new CelularesAlta("Gris", "197g", "QHD+", "50MP", "12GB", "Google", "8 Pro", "Pixel 8 Pro"),
            new CelularesAlta("Verde", "190g", "QHD+", "50MP", "12GB", "Google", "9 Pro", "Pixel 9 Pro"),
            new CelularesAlta("Negro", "185g", "QHD+", "48MP", "12GB", "Google", "8", "Pixel 8"),
            new CelularesAlta("Azul", "195g", "QHD+", "50MP", "16GB", "Google", "9 Pro XL", "Pixel 9 Pro XL")
        ];
    }

    static iphone() {
        return [
            new CelularesAlta("Negro", "203g", "Super Retina XDR", "48MP", "6GB", "Apple", "14 Pro", "iPhone 14 Pro"),
            new CelularesAlta("Morado", "206g", "Super Retina XDR", "48MP", "6GB", "Apple", "14 Pro Max", "iPhone 14 Pro Max"),
            new CelularesAlta("Azul", "208g", "Super Retina XDR", "48MP", "8GB", "Apple", "15 Pro", "iPhone 15 Pro"),
            new CelularesAlta("Titanio", "221g", "Super Retina XDR", "48MP", "8GB", "Apple", "15 Pro Max", "iPhone 15 Pro Max"),
            new CelularesAlta("Negro", "230g", "Super Retina XDR", "48MP", "8GB", "Apple", "16 Pro", "iPhone 16 Pro")
        ];
    }
}

//tienda samsung
function tiendaSamsung() {
    //limpiamos la tabla antes de mostrar
    tbody.innerHTML = ""; 
    let menuCelular = parseInt(prompt(`1) Baja\n2) Media\n3) Alta\nIngresa la gama que deseas ver de Samsung:`));

    if (menuCelular === 1) {
        const samsungBaja = CelularesBaja.samsung();
        for (const element of samsungBaja) element.infoCelular();
    } else if (menuCelular === 2) {
        const samsungMedia = CelularesMedia.samsung();
        for (const element of samsungMedia) element.infoCelular();
    } else if (menuCelular === 3) {
        const samsungAlta = CelularesAlta.samsung();
        for (const element of samsungAlta) element.infoCelular();
    }
}

function tiendaXiaomi() {
    //limpiamos la tabla antes de mostrar
    tbody.innerHTML = "";
    let menuCelular = parseInt(prompt(`1) Baja\n2) Media\n3) Alta\nIngresa la gama que deseas ver de Xiaomi:`));

    if (menuCelular === 1) {
        const xiaomiBaja = CelularesBaja.xiaomi();
        for (const element of xiaomiBaja) element.infoCelular();
    } else if (menuCelular === 2) {
        const xiaomiMedia = CelularesMedia.xiaomi();
        for (const element of xiaomiMedia) element.infoCelular();
    } else if (menuCelular === 3) {
        const xiaomiAlta = CelularesAlta.xiaomi();
        for (const element of xiaomiAlta) element.infoCelular();
    }
}

function tiendaMotorola() {
    //limpiamos la tabla antes de mostrar
    tbody.innerHTML = "";
    let menuCelular = parseInt(prompt(`1) Baja\n2) Media\n3) Alta\nIngresa la gama que deseas ver de Motorola:`));

    if (menuCelular === 1) {
        const motoBaja = CelularesBaja.motorola();
        for (const element of motoBaja) element.infoCelular();
    } else if (menuCelular === 2) {
        const motoMedia = CelularesMedia.motorola();
        for (const element of motoMedia) element.infoCelular();
    } else if (menuCelular === 3) {
        const motoAlta = CelularesAlta.motorola();
        for (const element of motoAlta) element.infoCelular();
    }
}

function tiendaPixel() {
    //limpiamos la tabla antes de mostrar
    tbody.innerHTML = "";
    let menuCelular = parseInt(prompt(`1) Baja\n2) Media\n3) Alta\nIngresa la gama que deseas ver de Pixel:`));

    if (menuCelular === 1) {
        const pixelBaja = CelularesBaja.pixel();
        for (const element of pixelBaja) element.infoCelular();
    } else if (menuCelular === 2) {
        const pixelMedia = CelularesMedia.pixel();
        for (const element of pixelMedia) element.infoCelular();
    } else if (menuCelular === 3) {
        const pixelAlta = CelularesAlta.pixel();
        for (const element of pixelAlta) element.infoCelular();
    }
}

function tiendaIphone() {
    //limpiamos la tabla antes de mostrar
    tbody.innerHTML = "";
    let menuCelular = parseInt(prompt(`1) Baja\n2) Media\n3) Alta\nIngresa la gama que deseas ver de iPhone:`));

    if (menuCelular === 1) {
        const iphoneBaja = CelularesBaja.iphone();
        for (const element of iphoneBaja) element.infoCelular();
    } else if (menuCelular === 2) {
        const iphoneMedia = CelularesMedia.iphone();
        for (const element of iphoneMedia) element.infoCelular();
    } else if (menuCelular === 3) {
        const iphoneAlta = CelularesAlta.iphone();
        for (const element of iphoneAlta) element.infoCelular();
    }
}


const elegirCelular = ()=>{
    let menuCelular = parseInt(prompt(`1) Samsung\n2) Xiaomi\n3) Motorola\n4) Pixel\n5) iPhone\nElige la marca:`));

    if (menuCelular === 1) tiendaSamsung();
    else if (menuCelular === 2) tiendaXiaomi();
    else if (menuCelular === 3) tiendaMotorola();
    else if (menuCelular === 4) tiendaPixel();
    else if (menuCelular === 5) tiendaIphone();
    else console.log("Opción no válida");
}

elegirCelular();
