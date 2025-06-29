import express from 'express';
import cors from 'cors';
import { router } from '../backend/routes/api.js';

// Este é o ponto de entrada do servidor Express para o backend do portfólio.
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});