export function agregarItem(texto) {
  const lista = document.getElementById("lista");
  if (lista) {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  }
}

console.log("App lista!");

const boton = document.getElementById("btn-agregar");
if (boton) {
  boton.addEventListener("click", () => {
    agregarItem("Nuevo item");
  });
}
