const secoes = ['topo', 'experiencias', 'sobre', 'projetos'];

export function initMenu() {
  // já mostra a seção inicio quando rodar
  mostrarSecao('topo');

  for (let i = 0; i < secoes.length; i++) {
    const botao = document.getElementById('botao-' + secoes[i]);
    if (botao) {
      botao.onclick = function(evento) {
        evento.preventDefault();
        mostrarSecao(this.id.replace('botao-', ''));
      }
    }
  }
}

function mostrarSecao(id) {
  for (let i = 0; i < secoes.length; i++) {
    const secao = document.getElementById(secoes[i]);
    if (secao) {
      secao.style.display = (secoes[i] === id) ? 'block' : 'none';
    }
  }
}

// Inicialize o menu quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initMenu);