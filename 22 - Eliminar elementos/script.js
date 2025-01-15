/**
 * Reutilizando el código de "Agregar elementos al DOM"
 */

let formulario = document.getElementById("course-form");
let contenedor = document.getElementById("row");
//¡¡¡----Declaro afuera el div para usarlo en otros métodos (ahora es una variable global)----!!!
let div = null;


formulario.addEventListener("submit", function(e){
    //Esta es la función que previene el refresco de la página
    e.preventDefault(); //si se refresca por el evento submit, se borran las tarjetas creadas

    //tras el evento sumbit recuperamos la info y se la pasamos a la función
    let titulo = document.getElementById("title-form").value;
    let description = document.getElementById("description-form").value;
    
    crearTarjeta(titulo, description);
});

/**
 * RESUMEN FOLDER 22 - ELIMINAR ELEMENTOS: 
 * 
 * En esta práctica buscamos añadir el evento de eliminar de las tarjetas y darle funcionalidad...
 * 
 * Dentro de la función para crear tarjetas, añadimos el evento al botón (que en realidad es una
 * etiqueta <p>) que elimina la tarjeta, asociandole la función eliminarTarjeta() que creamos, igualmente
 * creamos la función de obtener ancestros.
 * 
 * Como el botón "Eliminar " de la tarjeta,se encuentra a 4 capas del contenedor(div.row), 
 * obtenemos el padre, del padre, del padre, del padre del botón, 
 * es decir, el div como tal de la tarjeta (div), ese elemento (div) lo guardamos en una variable y
 * ya simplemente al contenedor de tarjetas(div.row) le decirmos que elimine a uno de sus hijos, cual?
 * el de la variable.
 */



//salvo el evento click para eliminar, todo lo demas es código de la clase pasada
function crearTarjeta(titulo, description){
  div = document.createElement("div");
  div.className = "col-sm-6 col-md-4";

  let thumbnail = document.createElement("div");
  thumbnail.className = "thumbnail";

  let caption = document.createElement("caption");

  let h3 = document.createElement("h3");
  h3.textContent = titulo;

  let p1 = document.createElement("p");
  p1.textContent = description;

  let p2 = document.createElement("p");
  //¡¡¡----aquí mismo le agrego el método click a todas las tarjetas que se crean----!!!
  p2.addEventListener("click", eliminarTarjeta);
  
  let a = document.createElement("a");
  a.className = "btn btn-danger";
  a.textContent = "Eliminar";


  p2.appendChild(a);
  caption.appendChild(h3);
  caption.appendChild(p1);
  caption.appendChild(p2);
  thumbnail.appendChild(caption);
  div.appendChild(thumbnail);
  //Agregar la nueva tarjeta
  contenedor.appendChild(div);
}

/**
 * Función que elimina la tarjeta:
 * 
 * Aquí hacemos uso del evento y su atributo target, para 
 * obtener el elemento html que lanzó el evento.
 * 
 * En la función ancestro, le decimos que vaya 4 capas
 * hacía arriba.
 * 
 * Y finalmente le decimos que elimine el elemento que nos 
 * retorna la función ancestros.
 */
function eliminarTarjeta(e){
  let ancestro = obtener_ancestro(e.target, 4);
  contenedor.removeChild(ancestro);
}


/**
 * la función recibe un elmento y la cantidad de 
 * niveles o capas que iremos hacía arriba. 
 * 
 * De manera recursiva llamamos a la misma función para
 * ir subiendo, nivel por nivel, para al final obtener el 
 * elemento deseado.
 * 
 * En este caso, al pasar 4 niveles, hace que nuestro elemento deseado
 * sea el "div" principal que forma la tarjeta como tal.
 */

function obtener_ancestro(ancestro, nivel){
  if(nivel == 0){
    return ancestro;
  }
  nivel--;
  return obtener_ancestro(ancestro.parentElement, nivel);
}