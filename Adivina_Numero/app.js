let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 10;

//DOM : DOCUMENT OBJECT MODEL
//document nos permite trabajar de manera dinamica entre javascript y html; es un objeto donde le vamos a poner un texto.
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/*let titulo = document.querySelector('h1'); 
titulo.innerHTML= 'Juego del número secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML='indica un numero del 1 al 10';*/

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)?'vez':'veces'}`)
        //activando boton nuevo juego cuando acertamos, cuando reinicia es solo un remove
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número es menor')
        }else{
            asignarTextoElemento('p','El número es mayor')
        }
        intentos++; 
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon los numeros posibles')
    }else{
        //si el numero esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();//recursividad llamar funcion a si misma.
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje inicio intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego, con set lo habilitamos y true
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();