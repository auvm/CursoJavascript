const title = document.getElementById("title");
title.innerHTML = "Cursos";

const description = document.getElementById("description");
description.innerHTML = "Listado de nuevos cursos agregados.";



/**
 * Es importante diferenciar entre UN NODO y UN ELEMENTO
 * los elementos son aquellos que seleccionaremos con las instrucciones de .document
 * mientras que los nodos son los elementos MÁS PEQUEÑOS DEL DOM.
 */
//tomamos el primer elemento de la lista - QUE ES UN ELEMENTO
const firts_element = document.querySelector("#first-course");

console.log("-----------Primer elemento--------------");
//MOSTRAMOS QUE EL ELEMENTO NO TIENE HIJOS
console.log("Elementos hijos: ",firts_element.children);
//EL CONTEO DE LOS HIJOS ES CERO (0)
console.log("Conteo de hijos:",firts_element.childElementCount);
console.log("------------------------------------");
//PERO SI TIENE NODOS, QUE EN ESTE CASO ES EL TÉXTO - SIN TEXTO, TAMBIÉN SERIA CERO O VACÍO
console.log("Elementos nodos hijos: ", firts_element.childNodes);
//EL CONTEO SOLO ES 1, PORQUE ES EL TEXTO
console.log("Conteo de nodos hijos: ", firts_element.childNodes.length);



console.log("-----------Último elemento-------------");
/**
 * Si tomamos el último elemento que está modificado, añadimos una etiqueta <p> y varios saltos de 
 * linea internos del código, veremos que esos aspectos pasan a ser NODOS del ELEMENTO, 
 * que en este caso como tal, es el último elemento de la lista.
 */
//TOMA EL ÚLTIMO ELEMENTO
const last_element = document.querySelector("#last-course");
//MUESTRA QUE TIENE 3 HIJOS
console.log("Conteo de nodos hijos: ", last_element.childNodes.length);
//QUE SON TEXTO(EL SALTO DE LINEA, LA ETIQUETA P Y OTRO TEXTO(EL SEGUNDO SALTO DE LÍNEA)
console.log("Elementos nodos hijos: ", last_element.childNodes);