// ---------------- IGNORAR ----------------
const title = document.getElementById("title");
title.innerHTML = "Cursos";
const description = document.getElementById("description");
description.innerHTML = "Listado de nuevos cursos agregados.";

//Conseguir elementos por nombre de etiqueta html
const items = document.getElementsByTagName("li");
for(var i = 0; i < items.length; i++){
    let element = items[i];
}
//Añade un fondo de color para los elementos pares en la lista
for(var i = 0; i < items.length; i++){
    if( i % 2 == 0){
        let element = items[i];
        element.style.background = "#f2f2f2";
    }
}

// ---------------- PROPAGACIÓN DE EVENTOS - EJEMPLO 2----------------

/**
 * Cuando se dispara un evento, el mismo se propaga de manera 
 * ascendente ⬆️ a sus ancestros.
 */

const elemento = document.querySelector('li');
const lista = document.querySelector('ul');
const div_row = document.querySelector('.row');
const div_container = document.querySelector('.container');
const body = document.querySelector('body');

/**
 * Para este ejemplo, mostramos la diferencia entre el 
 * target(parte del evento que guarda el elemento que dispara el evento)
 * y "this" que es el elemento actual.
 */

elemento.addEventListener("click", show_messages);
lista.addEventListener("click", show_messages);
div_row.addEventListener("click", show_messages);
div_container.addEventListener("click", show_messages);
body.addEventListener("click", show_messages);


/**
 * Al verse propagado el evento de manera ascendente, 
 * el elemento de "this" irá cambiando, mientras que target
 * mantiene el mismo valor
 */

function show_messages(e){
    console.log("Elemento this: " + this.tagName);
    console.log("Elemento que disparó el evento: " + e.target.tagName);
}