//alert("Hola este es mi Javascript");

//let nombre = "Mateo";

//console.log(nombre)

// SELECCIONAR ELEMENTOS

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".condicional")
titulo.innerHTML = contenidoTitulo;

let acercaDe = document.getElementById("título-acerca-de")

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo)

if(textoTitulo === "Nombre") {
    titulo.innerHTML = "Otro";
    acercaDe.innerHTML = acercaDe.innerHTML + " ajustado"

} else {
    console.log("no se cumple")
}

//FUNCIONES

let nombretext = "Mateo"
let pais = "Colombia"
let gustos = "aprender cosas nuevas, la música electrónica, entre otras cosas"

let parrafo = document.querySelector (".parrafo2");

function cambiarTexto (nombretext, pais, gustos) {
    let content = `Me llamo ${nombretext}, vivo en ${pais}. Me gusta ${gustos}.`

    return content
}

parrafo.innerText=cambiarTexto(nombretext, pais, gustos)

//MENÚ NAVEGACIÓN

let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };