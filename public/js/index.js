const btn = document.getElementById("btn");
let importe = document.getElementById("importe");
let cant = document.getElementById("cantidad");
let servicio = document.getElementById("calificaciones");
const seccion = document.getElementById("propina");
let valorFinal;
let calcularPropina = () => {
  let precio = parseInt(importe.value);
  if (validacionDeDatos(precio)) {
    return;
  }
  let nota = parseInt(servicio.value);
  let cantidad = parseInt(cant.value);
  if (validacionDeDatos(cantidad)) {
    return;
  }
  switch (nota) {
    case 1:
      valorFinal = (precio * 0.04) / cantidad;
      break;
    case 2:
      valorFinal = (precio * 0.06) / cantidad;
      break;
    case 3:
      valorFinal = (precio * 0.08) / cantidad;
      break;
    case 4:
      valorFinal = (precio * 0.1) / cantidad;
      break;
    case 5:
      valorFinal = (precio * 0.125) / cantidad;
      break;
  }

  return valorFinal;
};

btn.addEventListener("click", () => {
  borrarHijos();
  if (calcularPropina()) {
    let propina = document.createElement("h5");

    propina.textContent =
      "La propina es de $ " + calcularPropina() + " por persona";
    seccion.appendChild(propina);
  }
});

function borrarHijos() {
  var e = document.querySelector("#propina");
  var hijo = e.lastElementChild;
  while (hijo) {
    e.removeChild(hijo);
    hijo = e.lastElementChild;
  }
}

let validacionDeDatos = (dato) => {
  if (isNaN(dato) || dato < 0 || dato === 0) {
    alert("Ingresaste un dato incorrecto, ingresalo de manera correcta");
    importe.value = "";
    cant.value = "";
    return true;
  } else {
    return false;
  }
};
