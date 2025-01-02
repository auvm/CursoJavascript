const title = document.getElementById("title");
title.innerHTML = "Cursos";

const description = document.getElementById("description");
description.innerHTML = "Listado de nuevos cursos agregados.";


//Conseguir elementos por nombre de clase
//const items = document.getElementsByClassName("list-group-item");
// for(var i = 0; i < items.length; i++){
//     let element = items[i];
//     console.log(element.innerHTML);
// }

//Conseguir elementos por nombre de etiqueta html
const items = document.getElementsByTagName("li");
for(var i = 0; i < items.length; i++){
    let element = items[i];
    console.log(element);
}

//Añade un fondo de color para los elementos pares en la lista
for(var i = 0; i < items.length; i++){
    if( i % 2 == 0){
        let element = items[i];
        element.style.background = "#f2f2f2";
    }
}

console.log("--------------------------Elementos por CSS------------------------------");
//De manera directa busca por el Id de la etiquera
//const element = document.querySelector("#first-course");

//js va a buscar y retornará el primer elemento que encuentre con esa clase
//const element = document.querySelector(".list-group-item");

//elige al elemento por reglas de CSS
const element = document.querySelector("div.row > ul.list-group > li");
console.log(element);

//el querySelectorAll selecciona a TODOS los elementos que coincidan en el HTML
const items2 = document.querySelectorAll("#list-group");
for(var i = 0; i < items.length; i++){
    if( i % 2 == 0){
        let element = items[i];
        element.style.background = "#972007";
        element.style.color = "#FFFFFF";
    }
}


/**aquí usa una regla de CSS para seleccionar únicamente los elementos de la lista
 *  que sean pares(odd) y también se puede con los impares(even)
 */
const items3 = document.querySelectorAll("li:nth-child(odd)");
for (const element of items3) {
    element.style.background = "#f2f2f2";
    element.style.color = "#000000";
    element.style.fontWeight = "Bold";
}
