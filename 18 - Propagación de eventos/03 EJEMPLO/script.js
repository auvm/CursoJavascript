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

// ---------------- PROPAGACIÓN DE EVENTOS - EJEMPLO 3----------------

/**
 * Otra forma de capturar y añadir el evento "click" a todas
 * nuestras etiquetas sin hacerlo de forma manual sería la siguiente...
 */

for(let elemento of document.querySelectorAll('*')){
    elemento.addEventListener("click", show_messages);
}


function show_messages(e){
    console.log("Elemento this: " + this.tagName);
    console.log("Elemento que disparó el evento: " + e.target.tagName);
}

/**
 * De esta manera podemos claramente le jerarquia de las etiquetas, 
 * es decir, todos los ancestros del "elemento" li, así como su propagación
 * del evento "click".
 */