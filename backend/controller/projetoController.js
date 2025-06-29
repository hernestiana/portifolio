import { getProjetos } from '../models/projetosModel.js';

// Função para obter todos os projetos
export function getAll(req, res) {
  const projetos = getProjetos();
  res.json(projetos);
}