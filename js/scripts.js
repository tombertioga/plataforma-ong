// Menu Mobile
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// Feedback de exemplo
function mostrarAlerta(tipo, mensagem) {
  const alerta = document.createElement("div");
  alerta.className = `alert ${tipo}`;
  alerta.textContent = mensagem;
  document.body.prepend(alerta);
  setTimeout(() => alerta.remove(), 3000);
}
