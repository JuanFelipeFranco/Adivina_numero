//DOM : DOCUMENT OBJECT MODEL
//document nos permite trabajar de manera dinamica entre javascript y html; es un objeto donde le vamos a poner un texto.
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
asignarTextoElemento('h1','Juego del numero secreto')
asignarTextoElemento('p','indica un numero del 1 al 100')
/*let titulo = document.querySelector('h1'); 
titulo.innerHTML= 'Juego del número secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML='indica un numero del 1 al 10';*/

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto)
    console.log(typeof(numeroSecreto))
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario===numeroSecreto)
    return;
}

let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
function generarNumeroSecreto() {
    return numeroSecreto = Math.floor(Math.random()*10)+1;
}