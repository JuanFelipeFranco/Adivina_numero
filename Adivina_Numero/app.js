//DOM : DOCUMENT OBJECT MODEL
//document nos permite trabajar de manera dinamica entre javascript y html; es un objeto donde le vamos a poner un texto.
let titulo = document.querySelector('h1'); 
titulo.innerHTML= 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML='indica un numero del 1 al 10';

function intentoDeUsuario(){
    alert('click')
}
