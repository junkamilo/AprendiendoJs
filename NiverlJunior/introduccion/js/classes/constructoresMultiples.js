class persona{
    //creamos un nuevo constructor pero como metodo estaticos, es una de la forma para crar instancias.
    static porObejto({nombre,apellido,pais}){
        return new persona(nombre,apellido,pais);
    }

    constructor(nombre,apellido,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    GetInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido},${this.pais}`);
    }
}

const nombre1 = "juan", apellido1 = "beltran" , pais1 = "colombia";
//creamos un objeto
const juan = {
    nombre: 'juan',
    apellido: "beltran",
    pais: 'brasil'
}
const persona1 = new persona(nombre1,apellido1,pais1);
const persona2 = persona.porObejto(juan);
persona1.GetInfo();
persona2.GetInfo();


