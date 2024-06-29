const title = document.getElementById("title");
title.innerHTML = "Cursos";

const description = document.getElementById("description");
description.innerHTML = "Listado de nuevos cursos agregados.";

/**
 * Para conseguir los hijos de una lista, primero debo conseguir la lista
 * que sería el padre.
 * 
 */
/* <ul class="list-group"></ul> */
const lista_de_lenguajes = document.querySelector(".list-group");
console.log(lista_de_lenguajes)

console.log("Count de elementos hijos de la lista: "+lista_de_lenguajes.childElementCount);
console.log("Accede por índice de la lista: "+lista_de_lenguajes.children[2].innerHTML);

console.log("Primer elemento de la lista: "+lista_de_lenguajes.firstElementChild.innerHTML);
console.log("Último elemento de la lista: "+lista_de_lenguajes.lastElementChild.innerHTML);


console.log("--------- Lista de lenguajes iterada ---------");
for (const lenguaje of lista_de_lenguajes.children) {
    console.log(lenguaje.innerHTML);
}