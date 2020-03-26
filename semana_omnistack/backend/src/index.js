const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP
 * 
 * GET: buscar uma informação no back-end
 * POST: criar uma informação no Back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query: parâmetros nomeados enviados na rota após "?" (filtros, paginação, etc)
  * Route: parâmetros utilizados para identificar recursos
  * Request Body: corpo da requisição utilizado para criar ou alterar recursos
  */



app.listen(3333);


