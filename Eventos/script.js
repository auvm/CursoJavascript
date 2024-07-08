const title = document.getElementById("title");
title.innerHTML = "Cursos";

const description = document.getElementById("description");
description.innerHTML = "Listado de nuevos cursos agregados.";

/**
 * Hay dos formas de agregar eventos a los elementos de HTML,
 * (se pueden agregar eventos a todoooo), la primera es en el propio
 * 1.- HTML con la etiqueta del evento, por ejemplo la etiqueta de click: 
 *      <... onclick="nombre_de_la_función_a_ejecutar"...>
 * 
 * 2.- La segunda forma es con un listener en jacascript:
 */

function Saluda(){
    console.log("Hola mundo!");
}

const btn_evento = document.getElementById("evento_listener");

/**
 * Para añadir el evento, recuperamos el elemento del .document
 * y luego le añadimos el listener...
 * 
 * La función .addEventListener requiere de dos argumentos,
 * uno el tipo de evento en este caso "click" y el segundo
 * es la función a ejecutar.
 * 
 * NOTA: TAMBIÉN PUEDEN SER FUNCIONES ANÓNIMAS O ARROW
 */
btn_evento.addEventListener("click", Saluda);


const btn_dblClick = document.getElementById("evento_dblClick");

btn_dblClick.addEventListener("dblclick", function(){
    console.log("Eyyy ya escuché!");
});
