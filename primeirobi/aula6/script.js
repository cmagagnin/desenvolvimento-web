function toggleDarkMode() {
  document.body.classList.toggle("theme-dark");
}

function saudarUsuario() {
  const nome = prompt("Qual é o seu nome?");
  const msg = nome && nome.trim() ? `Olá, ${nome.trim()}! Seja bem-vindo(a)!` : "Olá! Seja bem-vindo(a)!";
  alert(msg);
}

function mudarCorFundo() {
  const cor = prompt("Digite uma cor para o fundo (ex.: 'lightblue' ou '#222244'):");
  if (!cor) return;
  document.body.style.backgroundColor = cor;
}

function removerEsteBotao(e) {
  e.currentTarget.remove();
  alert("Botão removido!");
}

function adicionarParagrafo() {
  const saida = document.getElementById("saida");
  const p = document.createElement("p");
  p.textContent = "Este parágrafo foi adicionado dinamicamente via JavaScript.";
  saida.appendChild(p);
}

document.addEventListener("DOMContentLoaded", () => {
  const greetBtn = document.getElementById("greetBtn");
  const darkModeBtn = document.getElementById("darkModeBtn");
  const changeBgBtn = document.getElementById("changeBgBtn");
  const removeSelfBtn = document.getElementById("removeSelfBtn");
  const addParaBtn = document.getElementById("addParaBtn");
  const container = document.querySelector(".container");

  greetBtn.addEventListener("click", saudarUsuario);
  darkModeBtn.addEventListener("click", toggleDarkMode);
  changeBgBtn.addEventListener("click", mudarCorFundo);
  removeSelfBtn.addEventListener("click", removerEsteBotao);
  addParaBtn.addEventListener("click", adicionarParagrafo);

  container.classList.add("highlight");
  setTimeout(() => container.classList.remove("highlight"), 1800);

  const link = document.createElement("a");
  link.href = "https://www.example.com";
  link.textContent = "Visite Example.com";
  link.target = "_blank";
  document.getElementById("saida").appendChild(link);
});
