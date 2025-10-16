const monedasTesoro = (nameUsuario) => {
    const name = nameUsuario;
    let monedas = 0; // Estado privado

    function GuardarMonedas(cantidad){
        monedas += cantidad;
        console.log(`💰 El jugador ${name} guardó ${cantidad} monedas. Total: ${monedas}`);
    }

    function GastarMonedas(cantidad){
        monedas -= cantidad;
        console.log(`💸 El jugador ${name} gastó ${cantidad} monedas. Total: ${monedas}`);
    }

    function MostrarMonedas(){
        console.log(`📦 El jugador ${name} tiene ${monedas} monedas.`);
    }

    return { GuardarMonedas, GastarMonedas, MostrarMonedas };
}

// 🔹 Ejemplo de uso:
const resultado = monedasTesoro("Juan Camilo");
resultado.GuardarMonedas(2000);
resultado.GastarMonedas(1000);
resultado.MostrarMonedas();
