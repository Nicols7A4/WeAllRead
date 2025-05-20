let visible = false;
let modoOscuroActivo = true;

// document.getElementById("accesibilidad-boton").onclick = function () {
//   visible = !visible;
//   document.getElementById("accesibilidad-menu").style.display = visible ? "flex" : "none";
// };
document.getElementById("accesibilidad-boton").addEventListener("click", function() {
    const menu = document.getElementById("accesibilidad-menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
});

function cambiarTamano(accion) {
  const contenido = document.getElementById("contenido");
  let estilo = window.getComputedStyle(contenido, null).getPropertyValue('font-size');
  let tamano = parseFloat(estilo);

  if (accion === "+") tamano += 2;
  else if (accion === "-") tamano -= 2;

  contenido.style.fontSize = tamano + "px";
}

function alternarModo() {
  const linkOscuro = document.getElementById("modo-oscuro-css");

  if (modoOscuroActivo) {
    linkOscuro.remove();
  } else {
    const nuevoLink = document.createElement("link");
    nuevoLink.rel = "stylesheet";
    nuevoLink.href = "../../css/general_oscuro.css";
    nuevoLink.id = "modo-oscuro-css";
    document.head.appendChild(nuevoLink);
  }

  modoOscuroActivo = !modoOscuroActivo;
}
