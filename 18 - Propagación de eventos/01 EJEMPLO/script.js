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

// ---------------- PROPAGACIÓN DE EVENTOS ----------------

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
 * Para el ejemplo seleccionamos todos los elementos ascendentes
 * de un elemento de una lista, de modo que agregamos el evento click
 * a cada uno, y por el simple hecho de accionar un click en el "elemento",
 * los demás se van a disparar.
 */

elemento.addEventListener("click", function(){
    console.log("Aquí se disparó el: elemento");
});

lista.addEventListener("click", function(){
    console.log("Aquí se disparó el: lista");
});

div_row.addEventListener("click", function(){
    console.log("Aquí se disparó el: div_row");
});

div_container.addEventListener("click", function(){
    console.log("Aquí se disparó el: div_container");
});

body.addEventListener("click", function(){
    console.log("Aquí se disparó el: body");
});


