class Musica {
  constructor(nombreArtista, GeneroMusical, DescripcionMusical) {
    this.nombreArtista = nombreArtista;
    this.GeneroMusical = GeneroMusical;
    this.DescripcionMusical = DescripcionMusical;
  }
}

const DataArtista = () => {
  const artistasInstancias = [];
  const Artistas = [
    {
      nombreArtista: "BAdbunny",
      GeneroMusical: "Regueton",
      DescripcionMusical: "Descripcipon sobre la vida musical de badbunny",
    },
    {
      nombreArtista: "Tower",
      GeneroMusical: "Regueton",
      DescripcionMusical: "Descripcipon sobre la vida musical de badbunny",
    },
    {
      nombreArtista: "Bless",
      GeneroMusical: "Regueton",
      DescripcionMusical: "Descripcipon sobre la vida musical de badbunny",
    },
    {
      nombreArtista: "Arcangel",
      GeneroMusical: "Regueton",
      DescripcionMusical: "Descripcipon sobre la vida musical de badbunny",
    },
    {
      nombreArtista: "Deivi",
      GeneroMusical: "Regueton",
      DescripcionMusical: "Descripcipon sobre la vida musical de badbunny",
    },
    {
      nombreArtista: "Jay wheeler",
      GeneroMusical: "Regueton",
      DescripcionMusical: "Descripcipon sobre la vida musical de badbunny",
    },
  ];

  Artistas.forEach(({ nombreArtista, GeneroMusical, DescripcionMusical }) => {
    const instancia = new Musica(
      nombreArtista,
      GeneroMusical,
      DescripcionMusical
    );
    artistasInstancias.push(instancia);
  });

  console.log(artistasInstancias);
  return artistasInstancias; // <-- importante: devolver los datos para usar fuera
};

// Buscar Artistas (Promise corregida)
const BuscarArtistas = new Promise((resolve, reject) => {
  const artistas = DataArtista(); // llamamos a la función y obtenemos el array de instancias

  // Buscamos si existe algún artista llamado "Miguelito"
  const encontrado = artistas.find((a) => a.nombreArtista === "Jay wheeler");

  if (!encontrado) {
    reject("Artista no encontrado");
  } else {
    resolve("Artista Encontrado");
  }
});

// Consumir la promesa (ejemplo de manejo)
BuscarArtistas.then((msg) => console.log("✅", msg)).catch((err) =>
  console.error("❌", err)
);
