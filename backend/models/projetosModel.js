import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projetosFilePath = path.join(__dirname, 'projeto.json');

// Função para obter os projetos do arquivo JSON - leitura do arquivo json
export function getProjetos() {
  try {
    const data = fs.readFileSync(projetosFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
      //  Caso o arquivo não exista ou dê erro, retorna uma lista fixa de projetos
    return [
      {
        "titulo": "Validador de Formulário",
        "descricao": "Valida campos do formulário de contato usando JavaScript.",
        "tecnologias": ["HTML", "CSS", "JavaScript"],
        "link": "https://github.com/seuusuario/validador-formulario"
      },
      {
        "titulo": "Conversor de Moedas",
        "descricao": "Consulta taxas de câmbio via API e converte moedas.",
        "tecnologias": ["HTML", "JavaScript", "API"],
        "link": "https://github.com/seuusuario/conversor-moedas"
      },
    {
        "titulo": "Lista de Tarefas",
        "descricao": "Aplicação simples de lista de tarefas com armazenamento local.",
        "tecnologias": ["HTML", "CSS", "JavaScript"],
        "link": "https://github.com/seuusuario/todo-list"
    }
    ];
  }
}