/**
 * El evento submit del botón debe hacer que nosotros tomemos los datos de
 * los inputs y los "enviemos al servidor".
 * 
 * Por defecto ese evento provoca que una vez presionado el "submit",
 * la página se refresque y mande los datos al servidor, pero para poder 
 * ver la impresión de los datos(del ejemplo), prevenimos con 
 * la función del evento (e) preventDefault(),
 * así no se refresca y se verá a continuación.
 * 
 * 
 * El primer paso es recuperar del document el formulario, no los inputs.
 */

let formulario = document.getElementById("course-form");

//al formulario añadimos el evento
formulario.addEventListener("submit", function(e){
    //Esta es la función que previene el refresco de la página
    e.preventDefault();

    //Tomamos los valores de los inputs para el ejemplo
    let titulo = document.getElementById("title-form").value;
    let descripcion = document.getElementById("description-form").value;

    //Imprimimos los valores
    console.log(titulo);
    console.log(descripcion);
});