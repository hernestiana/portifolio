export function initTema() {
  // Iniciar com o tema escuro
  document.body.classList.add("tema-escuro"); 

  // texto inicial do botão
  const botaoTema = document.getElementById("toggle-tema");
  if (botaoTema) {
    botaoTema.textContent = "☀️ Modo Claro";
    
    // Alternar entre tema claro e escuro
    botaoTema.addEventListener("click", function () {
      document.body.classList.toggle("tema-escuro");

      // Mudar texto do botão dependendo do tema atual
      if (document.body.classList.contains("tema-escuro")) {
        this.textContent = "☀️ Modo Claro";
      } else {
        this.textContent = "🌙 Modo Escuro";
      }
    });
  }
}

// Inicialize o tema quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initTema);