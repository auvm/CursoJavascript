/**
 * Reutilizando el código de "Crear nuevos elementos"
 */

let formulario = document.getElementById("course-form");
let contenedor = document.getElementById("row");
//Declaro afuera el div para usarlo en otros métodos (ahora es una variable global)
let div = null;


formulario.addEventListener("submit", function(e){
    //Esta es la función que previene el refresco de la página
    e.preventDefault(); //si se refresca por el evento submit, se borran las tarjetas creadas

    //tras el evento sumbit recuperamos la info y se la pasamos a la función
    let titulo = document.getElementById("title-form").value;
    let description = document.getElementById("description-form").value;
    
    crearTarjeta(titulo, description);
});


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
  //aquí mismo le agrego el método click a todas las tarjetas que se crean
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

function eliminarTarjeta(e){
  let ancestro = obtener_ancestro(e.target, 4);
  contenedor.removeChild(ancestro);
}

function obtener_ancestro(ancestro, nivel){
  if(nivel == 0){
    return ancestro;
  }
  nivel--;
  return obtener_ancestro(ancestro.parentElement, nivel);
}