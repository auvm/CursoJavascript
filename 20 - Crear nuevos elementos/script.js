/**
 * Reutilizando el código del evento submit...
 * 
 * 
 * Para crear elementos nuevos, debemos recuperar el contenedor(por ejemplo el div), 
 * donde vamos a ir insertando el HTML, en este ejemplo las tarjetas.
 * 
 * Depués leemos los datos de los inputs, el título y descripción, para que, 
 * cuando demos "Crear curso", mandamos a llamar una función que crea una "plantilla",
 * que es el equivalente al maquetado HTML de la tarjeta(para comparar puedes ver el html de la tarjeta
 * de ejemplo en el archivo .html). 
 * 
 * Esa "plantilla" solo toma el título y la descripción de los inputs anteriormente recuperados,
 * para luego con el += (toma lo que tiene y agregale), se lo agregamos como una nueva
 * tarjeta al contenido actual del contenedor.
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

//función principal
function crearTarjeta(titulo, description){
    //maquetado de la tarjeta que inserta el título y la descripcións
    let maquetadoHTML = 
    `<div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <div class="caption">
            <h3 id="title_card"> ${titulo} </h3>
            <p id="description_card">${description}</p>
            <p>
              <a href="#" class="btn btn-danger">Acción</a>
            </p>
          </div>
        </div>
       </div>`;
    //agrega la nueva tarjeta al conenedor de la página HTML
    contenedor.innerHTML += maquetadoHTML;
}