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

// ---------------- DETENER PROPAGACIÓN DE EVENTOS ----------------

/**
 * Cuando se dispara un evento, el mismo se propaga de manera 
 * ascendente ⬆️ a TODOS sus ancestros, por lo mismo es importante saber
 * como detener dicha propagación si se tiene un requerimiento en específico.
 */

const elemento = document.querySelector('li');
const lista = document.querySelector('ul');

/**
 * Para el ejemplo seleccionamos la lista (ul) y sus elementos (li), les 
 * añadimos el evento click, y como sabemos, si damos click sobre el "elemento" (li),
 * se disparará el evento tanto para el "elemento"(li), como en "la lista"(ul).
 */

elemento.addEventListener("click", function(e){
    /**
     * para evitar la propagación ascendente, nos posicionamos en el nivel deseado
     * (de la jerarquía de los elementos donde queremos detener la propagación)*
     * y usamos el método del evento .stopPropagation()
     */
    console.log("Aquí se disparó el: elemento");
    e.stopPropagation();
});

lista.addEventListener("click", function(){
    console.log("Aquí se disparó el: lista");
});


/**
 * Si no se previniera la propagación, entonces se imprimirían los mensajes
 * tanto del evento click del "elemnto" como de la "lista"
 */
