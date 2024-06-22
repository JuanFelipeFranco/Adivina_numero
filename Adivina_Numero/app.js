//DOM : DOCUMENT OBJECT MODEL
//document nos permite trabajar de manera dinamica entre javascript y html; es un objeto donde le vamos a poner un texto.
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
}

/*let titulo = document.querySelector('h1'); 
titulo.innerHTML= 'Juego del número secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML='indica un numero del 1 al 10';*/

function intentoDeUsuario(){
    alert('click')
}

asignarTextoElemento('h1','Juego del numero secreto')
asignarTextoElemento('p','indica un numero del 1 al 100')