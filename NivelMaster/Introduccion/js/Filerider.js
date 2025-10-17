//leemos un archivo que fue enviado

const file = document.getElementById("file");
file.addEventListener("change",()=>{
    leerArchivo(file.files[0]);
});

const leerArchivo = (col)=>{
    const reader = new FileReader();
    reader.readAsText(col);
    reader.addEventListener("load",(e)=>{
        console.log(JSON.parse(e.currentTarget.result));
    });
}