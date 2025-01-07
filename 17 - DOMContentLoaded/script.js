/**
 * Para casos especificos donde necesitamos que en nuestra página web
 * se cargue primero el java script para realizar ciertas funciones, 
 * necesitamos añadir el evento DOMContentLoaded al document como tal.
 * 
 * Ya que si intentamos simplemente pasar la etiqueta <script src="">
 * de nuestro script en el html a la parte de arriba, por ejemplo al <head>,
 * simplemente no funcionará y provocará errores. Ya que los elementos aún
 * no serán cargados y/o podrían ser nulos.
 */

//----Si dejemos el código a raíz del script, no funcionará-----

// const titulo = document.getElementById("title");
// const descripcion = document.getElementById("description");

// titulo.innerHTML = "Cursos";
// descripcion.innerHTML = "Listado de cursos";

/**
 * El script se debe poner dentro de la función anónima que se ejecuta
 * con el evento DOMContentDocument, el cual se ejecuta cuando
 * el DOM ya se haya construido.
 */

document.addEventListener("DOMContentLoaded", function(){

    console.log("Aquí el DOM ya fué construido!");

const titulo = document.getElementById("title");
const descripcion = document.getElementById("description");

titulo.innerHTML = "Cursos";
descripcion.innerHTML = "Listado de cursos";
});


/**
 * Lo recomendado siempre será poner el script al final del <body>, 
 * cuando el CSS y el HTML ya se hayan cargado, así conexiones lentas
 * pueden al menos interactuar con esos elementos mientras los scripts,
 * probablemente aún se estén cargando.
 */