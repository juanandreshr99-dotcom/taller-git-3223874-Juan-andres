console.log("App lista");

function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}

document.getElementById("btnAgregar").addEventListener("click", () => {
  const texto = prompt("Ingresa un texto:");
  if (texto) agregarItem(texto);
});
