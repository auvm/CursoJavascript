const title = document.getElementById("title");
title.innerHTML = "Cursos";

const description = document.getElementById("description");
description.innerHTML = "Listado de nuevos cursos agregados.";

/**
 * Existen propiedades en los elementos html para seleccionar a los hermanos y abuelos
 * de cada elemento.
 * 
 * NOTA: si no hay elemntos padre o hermanos o previos, simplemente las
 * instrucciones retornan NULL
 */

//selecciono el primer elemento de la lista y lo muestro
const element = document.querySelector("div.row > ul.list-group > li");
console.log("Elemento capturado: \"el primer elemnto li\"");
console.log(element);

//para tomar el elemento que lo contiene, el padre, se usa la propiedad .parentElement
console.log("Elemento padre: \"el ul completo\"");
console.log(element.parentElement);

//para tomar al elemento abuelo, solo uso el padre del padre
console.log("Elemento abuelo: \"el div row\"");
console.log(element.parentElement.parentElement);


//.nextElementSibling trae al hermano del elemento
console.log("Elemento hermano: \"JavaScript\"");
console.log(element.nextElementSibling);


//finalmente tomo al último elemento de la lista para recuperar al antepenúltimo!
const last_item = document.querySelector(".list-group-item:last-child");
console.log("Último elemento: "+last_item.innerHTML);
//con .previousElementSiblig obtengo el elemento previo
console.log("Un hermano anterior al último: "+last_item.previousElementSibling.innerHTML);

console.log("**************************************************************")
/**
 * Para comprobar que siempre retornar al elemento que contiene, es decir "el padre"
 * recupero del penúltimo elemento, su padre, y debería retornar el "ul" o listado
 * completo.
 */

console.log("Padre del penúltimo elemento: debe retornar el \"ul\"");
console.log(last_item.previousElementSibling.parentElement)

console.log("Abuelo del penúltimo elemento: debe retornar el \"row\"");
console.log(last_item.previousElementSibling.parentElement.parentElement)