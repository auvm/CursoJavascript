//--------------------- USANDO LOS ARCHIVOS DE LA CARPETA TARGET ------------------
const title = document.getElementById("title");
title.innerHTML = "Cursos";

const description = document.getElementById("description");
description.innerHTML = "Listado de nuevos cursos agregados.";

//Recupero los elementos...
const btn_evento = document.getElementById("evento_listener");
const continer_title = document.querySelector("#div_container");

//agrego el evento click al botón
btn_evento.addEventListener("click", function(e){

    if(continer_title.style.display != "none"){
        continer_title.style.display = "none"
        //para actualizar el texto del botón
        //btn_evento.textContent = "Mostrar";
        /**
         * Otras formas de usar el elemento que lanza el evento es con "this"...
         * */
        this.textContent = "Mostrar";

    }else{
        continer_title.style.display = "block"
        //btn_evento.textContent = "Ocultar";
        /**
         * Pero la forma más recomendada de acceder al ELEMENTO HTML, 
         * es mediante .target del OBJETO que lanza el evento...
         */
        e.target.textContent = "Ocultar";
    }
    console.log("----------------------------------------")
});
//---------------------------------------------------------------------------------



//agrego el listener para cambiar de clase cuando ENTRE al botón
btn_evento.addEventListener("mouseenter", function(){
    //estos nombres de clases corresponden a los estilos del css web asociado
    this.className = "btn btn-danger";
});


//agrego el listener para cambiar de clase cuando SALGA del botón
btn_evento.addEventListener("mouseleave", function(){
    //estos nombres de clases corresponden a los estilos del css web asociado
    this.className = "btn btn-info";
});


//link para ver más eventos del mouse
//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent