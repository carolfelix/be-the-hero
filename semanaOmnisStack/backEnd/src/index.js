const express = require('express');
const cors = require('cors');
const routes = require('./routes')


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP
// GET buscar uma informação no backend 
// POST criar uma informação no backend
// PUT alterar uma informação do backend
// DELETE deletar uma informação do backend

//Query params Parametros nomeados e enviados na rota após o ?
//Route params Parametros utilizados para identificar recursos
//Request Body Corpo da requisição, criar ou alterar recursos


