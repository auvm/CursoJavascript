/**
 * Demostración del evento keydown (cuando se presiona una tecla en un
 * input), que se imprima en consola cúal tecla se presionó y su código.
 */

const input_title = document.getElementById('title-form');


/** Keydown
 * En la función se pasa automáticamente el evento "e", que
 * contiene entre sus atributos, la tecla presionada y su código.
 */
input_title.addEventListener('keydown', function(e){
    console.log(e.key);
})


/** Keyset
 * para solo señalar que una tecla ha sido presionada.
 
input_title.addEventListener('keypress', function(e){
    console.log("Tecla presionada.");
});


*/