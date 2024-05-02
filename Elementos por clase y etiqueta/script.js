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

