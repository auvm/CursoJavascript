const title = document.getElementById("title");
title.innerHTML = "Cursos";


/**
 * Obetenmos el elemento de descrición
 * NOTA: LO IMPORTANTE ES NOTAR QUE .INNERHTML APLICA A ELEMENTOS Y 
 * .TEXTCONTENT A NODOS.
 */
const description = document.getElementById("description");

//description.innerHTML = "Listado de nuevos cursos agregados.";

/**
 * Como podemos ver, el innerHTML muestra los saltos de linea, así como 
 * las etiquetas dentro del elemento como tal. Esto porque .innerHTML
 * se aplica sobre el elemento como tal. Mientras que ...
 */
console.log(description.innerHTML);

/**
 * Si obtenemos el elemento copia de ejemplo, podemos ver que al 
 * mostrar el texto del elemento, solo se muestra eso, el texto.
 * las etiquetas se aplican, pero no se visualizan, ésto porque
 * .textContent se aplica sobre el nodo del elemento, es decir
 * la medida más pequeña del elemento.
 */
const elementoP = document.getElementById("elementop");
console.log(elementoP.textContent);



