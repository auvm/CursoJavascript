/**
 * Reutilizando el código de "Crear nuevos elementos"
 */

let formulario = document.getElementById("course-form");
let contenedor = document.getElementById("row");

formulario.addEventListener("submit", function(e){
    //Esta es la función que previene el refresco de la página
    e.preventDefault(); //si se refresca por el evento submit, se borran las tarjetas creadas

    //tras el evento sumbit recuperamos la info y se la pasamos a la función
    let titulo = document.getElementById("title-form").value;
    let description = document.getElementById("description-form").value;
    
    crearTarjeta(titulo, description);


});


/**
 * Esta nueva forma de crear elementos es muy manual, 
 * lo que se hace es, crear en el DOM, elemento por elemento(html), 
 * los cuales guardamos en variables y a cada una de esas variables, 
 * les vamos vamos agregando sus respectivos textos, clases y/o eventos...
 */

function crearTarjeta(titulo, description){
  let div = document.createElement("div");
  div.className = "col-sm-6 col-md-4";

  let thumbnail = document.createElement("div");
  thumbnail.className = "thumbnail";

  let caption = document.createElement("caption");

  let h3 = document.createElement("h3");
  h3.textContent = titulo; //título del input

  let p1 = document.createElement("p");
  p1.textContent = description; //descripción del input

  let p2 = document.createElement("p");
  
  let a = document.createElement("a");
  a.className = "btn btn-danger";
  a.textContent = "Eliminar";

  /** 
  * Una vez que todos los elementos que necesitamos están en variables,
  * se van añadiendo uno por uno como hijos o padres contenedores.
  *  
  * Por ejemplo, si tenemos un botón que va en un formilario, pues 
  * le decimos al formulario que añada al botón como su hijo,
  * esto con la función .appendChild()
  * Gráficamente, algo así:
  * FORM { BTN } <- El btn está adentro del form
  */

  p2.appendChild(a);

  caption.appendChild(h3);
  caption.appendChild(p1);
  caption.appendChild(p2);

  thumbnail.appendChild(caption);

  div.appendChild(thumbnail);


  /**
   * Al final le decimos al contenedor de las tarjetas (div.row), 
   * que añada la tarjeta recién creada.
   */
  //Agregar la nueva tarjeta
  contenedor.appendChild(div);
}
