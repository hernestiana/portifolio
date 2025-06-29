// Método para buscar projetos do backend
// Esse arquivo contém a lógica para buscar os projetos do backend e retornar os dados.

export async function buscarProjetos() {
  try {
    // Função assíncrona que acessa a API
    const resposta = await fetch('http://localhost:3000/api/projetos');
      //Converte a resposta em JSON e retorna
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    // Se der erro, mostra no console e retorna array vazio
    console.error("Erro ao carregar os projetos:", erro);
    return [];
  }
}