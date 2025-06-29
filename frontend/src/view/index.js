// Esse arquivo contém a lógica para renderizar os projetos na página.
export function renderizarProjetos(projetos) {
  const container = document.getElementById('projetos');
  container.innerHTML = '';

  projetos.forEach(projeto => {
     // Cria uma div para cada projeto
    const div = document.createElement('div');
    div.className = 'card-projeto';
 // Monta o HTML com os dados do projeto de forma dinamica
    div.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(', ')}</p>
      <a href="${projeto.link}" target="_blank">Ver Projeto</a>
    `;

    container.appendChild(div);
  });
}
