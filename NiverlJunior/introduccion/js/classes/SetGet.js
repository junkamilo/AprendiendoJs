class Artistas{
    constructor(name,NameArtistico,generoMusical,totalCanciones){
        this.name = name;
        this.NameArtistico = NameArtistico;
        this.generoMusical = generoMusical;
        this.totalCanciones = totalCanciones;
    }

    informacionArtista(){
        console.log(`Se llama ${this.name} lo cual se le conoce como ${this.NameArtistico}, pertenece al genero ${this.generoMusical} y tiene un total de canciones ${this.totalCanciones}`);
    }

    //el set solo recibe un argumento y es el que vamos a utilizar para agregar una nueva llame.
    set setMusicaFavorita(musica){
        this.musica = musica;
    }

    //con el get recuparemos un valor
    get getMusicaFavorita(){
        return `La musica favorita de ${this.name} es ${this.musica}`
    }
}

const ArtistaBadbunny = new Artistas("Benito","badbunny","Regueton",45);
ArtistaBadbunny.informacionArtista();
ArtistaBadbunny.setMusicaFavorita = 'Vallenato';
//agregamos un set si agregarlo a la clase loa gregamos desde este linea
ArtistaBadbunny.Pais = "Puerto Rico";
console.log(ArtistaBadbunny);
//obtemos la musica favorita de babdunny con el metodo get
console.log(ArtistaBadbunny.getMusicaFavorita);

