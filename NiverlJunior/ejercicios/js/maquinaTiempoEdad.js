const welcome = () => {
  alert("Iniciando Programa");
  alert("Bienvenido AL programa PortalEdadTiempo");
  alert(
    "Instruccion: para terminar y ver datos finales ingrese 'Salir' de lo contrario ingreses Datos"
  );
};
welcome();
let continuar;
let Usuarios = [];
const ahora = new Date();
const horaActual = ahora.getHours();
let horaDesde2am = (horaActual - 2 + 24) % 24;

do {
  let NombreUsuario = prompt("Ingrese nombre del usuario");
  let HoraUsuario = parseInt(prompt("Ingrese la hora de llegada en formato 24h (ejemplo: 9, 14, 23):"));

  Usuarios.push({ nombre: NombreUsuario, hora: HoraUsuario });

  continuar = prompt("¿Desea ingresar otro usuario? (si/no)");
} while (continuar !== "no");



const validarPago = ()=>{
for (const usuario of Usuarios) {
  console.log(`Usuario registrado: ${usuario.nombre} - ${usuario.hora}`);

  if (usuario.hora >= horaDesde2am) {
    console.log(`${usuario.nombre} NO PAGA LA ENTRADA`);
  } else {
    console.log(`${usuario.nombre} PAGA LA ENTRADA`);
  }
}
}

validarPago();
