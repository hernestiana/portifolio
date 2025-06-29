import express from 'express';
import { getAll } from '../controller/projetoController.js';

export const router = express.Router();

// Este arquivo configura as rotas da API do portfólio.
//Endpoint para obter todos os projetos
router.get('/projetos', getAll);