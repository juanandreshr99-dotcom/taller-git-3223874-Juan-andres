console.log("App lista");

function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}

document.getElementById("btnAgregar").addEventListener("click", () => {
  agregarItem("Nuevo item");
});
