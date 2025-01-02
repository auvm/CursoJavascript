const title = document.getElementById("title");
title.innerHTML = "Cursos";

const description = document.getElementById("description");
description.innerHTML = "Listado de nuevos cursos agregados.";

/**
 * En esta practica lo que se busca es recuperar dos cosas, un botón para accionar un evento
 * y un elemento, en este caso el div que contiene el titulo de la página y la descripción,
 * para accinar el botón y que desaparezca el div con todo su contenido.
 * 
 * La funcionalidad del botón se hace con un .addEventListener() común y la
 * recuperación del div como del botón se hace con un .querySelector por ID de HTML
 */

//Recupero los elementos...
const btn_evento = document.getElementById("evento_listener");
const continer_title = document.querySelector("#div_container");

//agrego el listener al botón
btn_evento.addEventListener("click", function(e){
    /**
     * La función puede recibir un argumento(para el ejemplo, lo recibe),
     * ese argumento es un objeto con un atributo especial, el atributo "target", 
     * que alberga el "elemento HTML" que lanzó el evento,
     * en este caso ese elemento es el "btn_evento".
     * 
     * NOTA: DIFERENCIAR ENTRE OBJETO Y ELEMENTO HTML NOS AYUDA A ENTENDER
     * A QUÉ SE REFIERE EL ATRIBUTO .TARGET, QUE SIMPLEMENTE ES EL ATRIBUTO
     * DEL "OBJETO" QUE CONTIENE AL "ELEMENTO"
     */
    console.log("OBJETO QUE LANZA EL EVENTO: ",e); //aquí se imprime el OBJETO!

    /**
     * La función asigna el display none o block, para hacer que aparezca o 
     * desaparezca de la vista.
     * También con cada cambio renombramos el texto del botón.
     */
    console.log("ELEMENTO HTML QUE LANZA EL EVENTO: ",e.target);//aquí se imprime el ELEMENTO HTML que lanza el objeto!

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

