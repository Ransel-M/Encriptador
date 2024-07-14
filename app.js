/*Limitador de caracteres*/
const texto = document.querySelector(".input-principal");
texto.addEventListener("keydown", (e)=>{
    const expre = /[a-z0-9.,ñ ]/;
    if(!expre.test(e.key)) e.preventDefault();
})

/*Encriptado de texto*/
const encriptar = document.querySelector(".encriptar")
encriptar.addEventListener("click", encriptacion)

function encriptacion(){
    if(texto.value.length > 0){
        intercambiarElementos()
        textarea.value = encriptado()
        recize()
    }
}

function encriptado(){
    let encriptado = texto.value
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat")
    return encriptado
}

/*Desencriptado de texto*/
const desencriptar = document.querySelector(".desencriptar")
desencriptar.addEventListener("click", desencriptacion)

function desencriptacion(){
    if(texto.value.length > 0){
        intercambiarElementos()
        textarea.value = desencriptado()
        recize()
    }
}

function desencriptado(){
    let desencriptado = texto.value
        .replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u")
    return desencriptado
}

/*Funcion para intercambiar imagen por resultado de la (des)encriptacion*/
function intercambiarElementos(){
    let conResultado = document.querySelectorAll(".con-resultado");
    let sinResultado = document.querySelector(".sin-resultado");
    let resultado = document.querySelector(".resultado")
    
    sinResultado.style.display = "none"
    conResultado[0].style.display = "block"
    conResultado[1].style.display = "block"
    resultado.style.justifyContent = "space-around"
    resultado.style.alignContent = "stretch"
    resultado.style.padding = "3% 0"
}

/*Funcion para reescalado automatico del textarea*/
const textarea = document.querySelector(".texto-resultado")
function recize(){
    textarea.style.height = "auto";
    let scrollHeight = textarea.scrollHeight;
    textarea.style.height = `${scrollHeight}px`
}

/*Evento para copiar al portapapeles*/
const copiar = document.querySelector(".copiar")
copiar.addEventListener("click", copiarPortapapeles)

function copiarPortapapeles(){
    navigator.clipboard.writeText(textarea.value)
}