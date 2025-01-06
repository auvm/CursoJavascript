/**
 * El evento change sirve para detectar cúando un input
 * checkbox o de tipo texto, cambian de valor. También
 * se pueden agregar a los formularios como tal.
 */

const checkbox = document.getElementById("form-checkbox");

checkbox.addEventListener("change", function(){
    console.log("El checkbox cambió de valor!");
})


/**
 * lo mismo pero aplicado al formulario como tal...
 * si cambiamos el valor de un input(escribimos o borramos),
 * en cuanto quitemos el foco del input modificado, se 
 * activa el evento.
 */

const formulario = document.getElementById("course-form");
formulario.addEventListener("change", function(){
    console.log("El formulario cambió de valor!");
});