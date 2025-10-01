let Datocofla = prompt("Cofla, Ingresa la cantidad de dinero que tienes para el helado");
let DatoRoberto = prompt("Roberto, Ingresa la cantidad de dinero que tienes para el helado");
let Datopedro = prompt("Pedro, Ingresa la cantidad de dinero que tienes para el helado");

Datocofla = parseInt(Datocofla);
if (Datocofla >= 6000 && Datocofla < 10000) {
    console.log("Cofla puedes comprarte el helado de agua");
    console.log("Te vueltos te quedan: " + (Datocofla - 6000));
    
    
}else if (Datocofla >= 10000 && Datocofla < 16000) {
    console.log("Cofla puedes comprarte el helado de crema");
    console.log("Te vueltos te quedan: " + (Datocofla - 10000));
    
}else if (Datocofla >= 16000 && Datocofla < 17000) {
    console.log("Cofla puedes comprarte el helado de heladix");
    console.log("Te vueltos te quedan: " + (Datocofla - 16000));
    
}else if (Datocofla >= 17000 && Datocofla < 18000) {
    console.log("Cofla puedes comprarte el helado de heladovich");
    console.log("Te vueltos te quedan: " + (Datocofla - 17000));
    
}else if (Datocofla >= 18000 && Datocofla < 29000) {
    console.log("Cofla puedes comprarte el helado de helardo");
    console.log("Te vueltos te quedan: " + (Datocofla - 18000));
    
}else if (Datocofla >= 29000) {
    console.log("Cofla puedes comprarte el helado de confite o el pote de 1/4 KG");
    console.log("Te vueltos te quedan: " + (Datocofla - 29000));
    
}else{
    console.log("NO tienes plata, vaya trabaje y consgue y vuelva a verificar antes de comprar");
    
}

if (DatoRoberto >= 6000 && DatoRoberto < 10000) {
    console.log("Roberto puedes comprarte el helado de agua");
    
}else if (DatoRoberto >= 10000 && DatoRoberto < 16000) {
    console.log("Roberto puedes comprarte el helado de crema");
    
}else if (DatoRoberto >= 16000 && DatoRoberto < 17000) {
    console.log("Roberto puedes comprarte el helado de heladix");
    
}else if (DatoRoberto >= 17000 && DatoRoberto < 18000) {
    console.log("Roberto puedes comprarte el helado de heladovich");
    
}else if (DatoRoberto >= 18000 && DatoRoberto < 29000) {
    console.log("Roberto puedes comprarte el helado de helardo");
    
}else if (DatoRoberto >= 29000) {
    console.log("Roberto puedes comprarte el helado de confite o el pote de 1/4 KG");
    
}else{
    console.log("NO tienes plata, vaya trabaje y consgue y vuelva a verificar antes de comprar");
    
}

if (Datopedro >= 6000 && Datopedro < 10000) {
    console.log("Pedro puedes comprarte el helado de agua");
    
}else if (Datopedro >= 10000 && Datopedro < 16000) {
    console.log("Pedro puedes comprarte el helado de crema");
    
}else if (Datopedro >= 16000 && Datopedro < 17000) {
    console.log("Pedro puedes comprarte el helado de heladix");
    
}else if (Datopedro >= 17000 && Datopedro < 18000) {
    console.log("Pedro puedes comprarte el helado de heladovich");
    
}else if (Datopedro >= 18000 && Datopedro < 29000) {
    console.log("Pedro puedes comprarte el helado de helardo");
    
}else if (Datopedro >= 29000) {
    console.log("Pedro puedes comprarte el helado de confite o el pote de 1/4 KG");
    
}else{
    console.log("NO tienes plata, vaya trabaje y consgue y vuelva a verificar antes de comprar");
    
}