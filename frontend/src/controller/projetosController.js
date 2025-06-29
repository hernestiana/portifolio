import { buscarProjetos } from '../model/projetosModel.js';
import { renderizarProjetos } from '../view/index.js';

// Função para buscar projetos do backend e renderizar na página
document.addEventListener('DOMContentLoaded', async () => {
   //  Chama o model para buscar os dados da API
  const projetos = await buscarProjetos();
  // Passa os dados para a view renderizar na tela
  renderizarProjetos(projetos);
});
