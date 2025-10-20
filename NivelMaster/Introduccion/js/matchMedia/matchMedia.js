"use strict"

//se comprueba la media query con el tamaño de pantalla
const mq = matchMedia("(max-width:500px)");
const caja = document.querySelector(".caja");
console.log(mq);

//change se ejecuta cuando mq.matches cambie de valor, true o false
mq.addEventListener("change",(e)=>{
    if (mq.matches) {
        caja.classList.replace("caja","responsive-caja");
    }
    else {
        caja.classList.replace("responsive-caja","caja");
    }
});

const caja3 = document.querySelector(".caja3");

const verifyVisibility = (entries)=>{
    const entry = entries[0];
    console.log(entry.isIntersecting);
    
}
const observer = new IntersectionObserver(verifyVisibility);

observer.observe(caja3);
//es para verificar cuando se muestra el elementoe en el viewport