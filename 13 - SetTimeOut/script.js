/**
 * La función timeout es del objeto window, 
 * recibe como parámetros una función de cualquier tipo
 * y los milisegundos que deben pasar para ejecutar la función
 */


//ejemplo
setTimeout(() => {
    console.log("hola, mundo");
}, 2000);

setTimeout(function() {
    console.log("hola, mundo");
}, 3000);



/**
 * si nuestra función requiere de argumentos para ser ejecutada, en ese caso 
 * la función settimeout(función, tiempo_ms, ...) puede recibir N argumentos depués del tiempo en ms,
 * y se le pasan a nuestra función en ese orden.
 */

setTimeout(function(p1, p2, p3){
    console.log(p1);
    console.log(p2);
    console.log(p3);
}, 4000, "argumento 1", "argumento 2", "argumento 3");


console.log("------------------------------------")
for (let index = 5; index < 8; index++) {
    setTimeout(function(p1){
        console.log(p1);
        }, index*1000, "argumento "+index);
    
}
